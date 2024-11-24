"use client";

import { Icon } from "@iconify/react";
import {
  Button,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
  Image,
  Alert,
  Group,
} from "@mantine/core";
import Link from "next/link";
import { Notification } from "@mantine/core";
import { Disclaimer } from "./components/disclaimer";

const instructions = [
  {
    number: 1,
    title: "Connect wallet to create account",
    description:
      "Click 'Connect' button at the top right corner of the screen to connect your wallet.",
  },
  {
    number: 2,
    title: "Download your menstrual cycle data from Clue App",
    description:
      "To download your Clue data, open the app and navigate to the More Menu (= icon in the top-right of the Cycle View). Go to Settings, tap Download my data, and then Request data. You’ll receive an email with a download link and a password displayed in the app. Use the password to access your data, which will be sent in JSON format. Make sure to download the file within 72 hours.",
  },
  {
    number: 3,
    title: "Upload data and claim token",
    description:
      "Submit your data here to claim Moonlight (MOON) token.",
  },
];

export default function Page() {
  return (
    <Container>
      <Grid>
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <Stack align="stretch" justify="center" gap="lg">
            <Title order={3} ff="monospace">
              Claim instructions
            </Title>
            <Disclaimer />
            {instructions.map((instruction, i) => (
              <Stack gap="sm" key={i}>
                <Text c="brand-2" fw="bold">
                  0{instruction.number}
                </Text>
                <Title order={6} c="brand-2">
                  {instruction.title}
                </Title>
                <Text fw="500">{instruction.description}</Text>
              </Stack>
            ))}
            <Flex justify="flex-end">
              <Link href="/">
                <Button color="brand-3">Upload Data</Button>
              </Link>
            </Flex>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5} offset={1} visibleFrom="md">
          <Image radius="md" src="/images/claim/instructions.png" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
