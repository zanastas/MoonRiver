"use client";

import { Container, Title, Text, Stack, List, Paper, Group, ThemeIcon } from "@mantine/core";
import { Icon } from "@iconify/react";

export default function AboutPage() {
  return (
    <Container size="lg">
      <Stack gap="xl">
        <Stack gap="md">
          <Title order={1}>Moon River - A Period Data Pool for Better Health</Title>
          <Text size="lg">
            Moon River is a Data Liquidity Pool (DLP) built on Vana, a layer-one blockchain designed 
            for the trustless and secure exchange of user-owned data.
          </Text>
        </Stack>

        <Stack gap="md">
          <Title order={2}>What's the Problem?</Title>
          <Text>
            For hundreds of years, women's health—especially menstrual health—hasn't been properly 
            studied. There's not enough good data about periods, symptoms, and related health issues. 
            This makes it harder to create better treatments, apps, and tools for women's health.
          </Text>
        </Stack>

        <Stack gap="md">
          <Title order={2}>Our Solution</Title>
          <Text>
            We create a safe, private, and rewarding space where people can share their period-related 
            data (like tracking symptoms, cycle patterns, or birth control side effects). This data 
            helps researchers and businesses create better tools and treatments for menstrual health, 
            and contributors get paid every time their data is used.
          </Text>
        </Stack>

        <Stack gap="md">
          <Title order={2}>How It Works</Title>
          <Group gap="xl">
            {[
              {
                title: "You Share Your Data Safely",
                items: [
                  "Use your period-tracking app (like Flo or Clue) to export your data",
                  "Upload it to MoonRiver through a secure website",
                  "Your data stays private and anonymous—no one can trace it back to you"
                ]
              },
              {
                title: "We Check and Protect Your Data",
                items: [
                  "Your data is double-checked for accuracy and uniqueness using smart technology",
                  "A special process makes sure your data hasn't been tampered with"
                ]
              },
              {
                title: "Your Data Helps Research",
                items: [
                  "Once your data is approved, it goes into a pool that researchers and companies can access",
                  "They pay to use the data"
                ]
              },
              {
                title: "You Get Paid",
                items: [
                  "Every time someone uses your data, you earn rewards in Moonlight (MOON) tokens",
                  "These tokens are valuable—you can trade, use, or save them"
                ]
              }
            ].map((section, i) => (
              <Paper key={i} shadow="sm" p="md" withBorder>
                <Stack gap="sm">
                  <Group>
                    <ThemeIcon size="lg" radius="xl" color="brand-3">
                      <Text fw={700}>{i + 1}</Text>
                    </ThemeIcon>
                    <Title order={4}>{section.title}</Title>
                  </Group>
                  <List>
                    {section.items.map((item, j) => (
                      <List.Item key={j}>{item}</List.Item>
                    ))}
                  </List>
                </Stack>
              </Paper>
            ))}
          </Group>
        </Stack>

        <Stack gap="md">
          <Title order={2}>What's Special About It?</Title>
          <List
            spacing="sm"
            icon={
              <ThemeIcon color="brand-3" size={24} radius="xl">
                <Icon icon="material-symbols:check-small" width={16} />
              </ThemeIcon>
            }
          >
            <List.Item><Text fw={700}>Privacy First:</Text> Your data is anonymized and encrypted. Nobody sees your name or personal details.</List.Item>
            <List.Item><Text fw={700}>You're in Control:</Text> You decide who uses your data and how.</List.Item>
            <List.Item><Text fw={700}>Get Rewarded:</Text> Unlike big companies that use your data for free, you earn a share of the revenue.</List.Item>
            <List.Item><Text fw={700}>Help Women's Health:</Text> Your contributions help researchers and companies create tools that actually improve women's health.</List.Item>
          </List>
        </Stack>

        <Stack gap="md">
          <Title order={2}>How Vana Works for You</Title>
          <List
            spacing="sm"
            icon={
              <ThemeIcon color="brand-3" size={24} radius="xl">
                <Icon icon="material-symbols:arrow-right" width={16} />
              </ThemeIcon>
            }
          >
            <List.Item><Text fw={700}>Contribute Data:</Text> Users contribute data to Data Liquidity Pools (DLPs). Contributions range from social media data to IoT and sensor data, all securely stored encrypted off-chain.</List.Item>
            <List.Item><Text fw={700}>Tokenize:</Text> Validated data is tokenized, enabling secure data usage across different decentralized applications, particularly for AI model development.</List.Item>
            <List.Item><Text fw={700}>Earn and Govern:</Text> Users gain governance rights in different DLP DAOs, influencing decisions about data use and getting a share of profit when data is used.</List.Item>
          </List>
          
          <Text>
            Vana leverages blockchain to ensure transparency, security, and decentralization in how data is owned and shared.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
