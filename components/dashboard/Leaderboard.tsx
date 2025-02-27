"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface LeaderboardEntry {
  challenge: string;
  username: string;
  time: string;
  region: string;
  amount: number;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    challenge: "Slot Games",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
  {
    challenge: "Live Casino",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
  {
    challenge: "Slot Games",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
  {
    challenge: "Sportbook",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
  {
    challenge: "Esport",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
  {
    challenge: "Slot Games",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
  {
    challenge: "Live Casino",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
  {
    challenge: "Live Casino",
    username: "Kholl",
    time: "12:55",
    region: "MY",
    amount: 363.62,
  },
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<"monthly" | "daily">("monthly");

  return (
    <Card className="bg-inherit text-white mt-10 p-5">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
        <div className="flex space-x-4 mb-4">
          <Button
            className="shadow-[1.425px_1.425px_2.851px_0px_rgba(255,255,255,0.24)_inset,0px_1.425px_4.276px_0px_rgba(10,124,255,0.24),0px_2.851px_8.552px_0px_rgba(10,124,255,0.24),0px_5.701px_11.403px_0px_rgba(10,124,255,0.12),0px_22.806px_45.611px_-11.403px_rgba(10,124,255,0.48)]"
            variant={activeTab === "monthly" ? "default" : "outline"}
            onClick={() => setActiveTab("monthly")}
          >
            Top Monthly
          </Button>
          <Button
            variant={activeTab === "daily" ? "default" : "outline"}
            onClick={() => setActiveTab("daily")}
          >
            Top Daily
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Challenge</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Time (GMT+8)</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Amount (USD)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.challenge}</TableCell>
                <TableCell>{entry.username}</TableCell>
                <TableCell>{entry.time}</TableCell>
                <TableCell>{entry.region}</TableCell>
                <TableCell>{entry.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
