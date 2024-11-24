"use client";

import {
  Box,
  Container,
  Stack,
  Title,
  Table,
  Text,
  Paper,
} from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import Link from 'next/link';
import Button from '@mantine/core/Button';

// Mock data for the leaderboard
const leaderboardData = [
  { rank: 1, address: "0x1234...5678", tokens: 15000, contributions: 12 },
  { rank: 2, address: "0x8765...4321", tokens: 12500, contributions: 10 },
  { rank: 3, address: "0x9876...1234", tokens: 10000, contributions: 8 },
  { rank: 4, address: "0x4567...8901", tokens: 7500, contributions: 6 },
  { rank: 5, address: "0x2345...6789", tokens: 5000, contributions: 4 },
  { rank: 6, address: "0x3456...7890", tokens: 2500, contributions: 2 },
  { rank: 7, address: "0x5678...9012", tokens: 1000, contributions: 1 },
];

export default function LeaderboardPage() {
  return (
    <Box>
      <Container>
        <Stack gap="xl" style={{
          background: 'rgba(13, 22, 55, 0.85)',
          padding: '40px',
          borderRadius: '12px',
          border: '1px solid rgba(142, 199, 255, 0.2)',
          backdropFilter: 'blur(8px)'
        }}>
          <Title order={2} style={{
            fontFamily: 'Cinzel, serif',
            color: '#7EE7F3',
            fontSize: '2.5rem',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Moon Token Leaderboard
          </Title>
          
          <Paper p="md" style={{
            background: 'rgba(13, 22, 55, 0.75)',
            border: '1px solid rgba(142, 199, 255, 0.2)',
            backdropFilter: 'blur(8px)'
          }}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ color: '#7EE7F3' }}>Rank</Table.Th>
                  <Table.Th style={{ color: '#7EE7F3' }}>Wallet Address</Table.Th>
                  <Table.Th style={{ color: '#7EE7F3' }}>Moon Tokens</Table.Th>
                  <Table.Th style={{ color: '#7EE7F3' }}>Contributions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {leaderboardData.map((item) => (
                  <Table.Tr key={item.rank}>
                    <Table.Td style={{ color: '#E0E7FF' }}>#{item.rank}</Table.Td>
                    <Table.Td style={{ color: '#E0E7FF' }}>{item.address}</Table.Td>
                    <Table.Td style={{ color: '#E0E7FF' }}>{item.tokens}</Table.Td>
                    <Table.Td style={{ color: '#E0E7FF' }}>{item.contributions}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
} 