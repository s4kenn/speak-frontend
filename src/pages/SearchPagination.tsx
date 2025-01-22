import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../components/ui/select";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const SearchWithPagination = () => {
  interface Question {
    title: string;
    type: string;
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [page, search, limit]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5555/api/questions", {
        params: { page, limit, search },
      });
      console.log(response.data);
      setQuestions(response.data.questions || []);
      setTotalPages(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleLimitChange = (value: any) => {
    setLimit(Number(value));
    setPage(1);
  };

  const highlightText = (text: string) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={handleSearchChange}
          className="flex-1"
        />

        <Select value={limit.toString()} onValueChange={handleLimitChange}>
          <SelectTrigger className="w-24">{limit}</SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="15">15</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table className="h-[32rem]">
        <TableCaption>
          Showing data from Page {questions.length === 0 ? 0 : page} out of{" "}
          {Math.ceil(totalPages / limit)}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Title</TableHead>
            <TableHead className="text-right">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                  <span>Loading... Please Wait</span>
                </Box>
              </TableCell>
            </TableRow>
          ) : questions.length > 0 ? (
            questions.map((q, index) => (
              <TableRow key={index}>
                <TableCell className="text-left">
                  {highlightText(q.title)}
                </TableCell>
                <TableCell className="text-right">{q.type}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2}>No questions found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4 space-x-2">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <span>Page {questions.length === 0 ? 0 : page}</span>
        <Button
          disabled={page === Math.ceil(totalPages / limit)}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SearchWithPagination;
