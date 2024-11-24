"use client";

import { Container, Title, Text, Stack, List, Paper, Group, ThemeIcon } from "@mantine/core";
import { Icon } from "@iconify/react";

export default function AboutPage() {
  return (
    <Container size="lg">
      <Stack gap="xl" style={{
        background: 'rgba(13, 22, 55, 0.85)',
        padding: '40px',
        borderRadius: '12px',
        border: '1px solid rgba(142, 199, 255, 0.2)',
        backdropFilter: 'blur(8px)'
      }}>
        <Stack gap="md">
          <Title order={1} style={{
            fontFamily: 'Cinzel, serif',
            color: '#7EE7F3',
            fontSize: '2.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Moon River - A Period Data Pool for Better Women's Health
          </Title>
          <Text size="lg" style={{
            fontFamily: 'Quicksand, sans-serif',
            color: '#E0E7FF',
            lineHeight: 1.7,
            fontSize: '20px'
          }}>
            Moon River is a Data Liquidity Pool (DLP) built on Vana, a layer-one blockchain designed 
            for the trustless and secure exchange of user-owned data.
          </Text>
        </Stack>

        <Stack gap="md">
          <Title order={2} style={{
            fontFamily: 'Cinzel, serif',
            color: '#7EE7F3',
            fontSize: '2rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Problem
          </Title>
          <Text style={{
            fontFamily: 'Quicksand, sans-serif',
            color: '#E0E7FF',
            lineHeight: 1.7,
            fontSize: '20px'
          }}>
            Women's health—especially menstrual health—hasn't been properly 
            studied. There's not enough good quality data about periods, symptoms, and related health issues. 
            This makes it harder to create better treatments and tools for women's health.
          </Text>
        </Stack>

        <Stack gap="md">
          <Title order={2} style={{
            fontFamily: 'Cinzel, serif',
            color: '#7EE7F3',
            fontSize: '2rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Our Solution
          </Title>
          <Text style={{
            fontFamily: 'Quicksand, sans-serif',
            color: '#E0E7FF',
            lineHeight: 1.7,
            fontSize: '20px'
          }}>
            We create a safe, private, and rewarding space where women can share their period-related 
            data (e.g. tracking symptoms, cycle patterns, or birth control side effects). This data 
            helps researchers and AI companies create better models, tools and treatments for menstrual health, 
            and contributors get paid every time their data is used.
          </Text>
        </Stack>

        <Stack gap="md">
          <Title order={2} style={{
            fontFamily: 'Cinzel, serif',
            color: '#7EE7F3',
            fontSize: '2rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            How It Works
          </Title>
          <Group gap="xl">
            {[
              {
                title: "You Share Your Data Safely",
                items: [
                  "Use your period-tracking app (like Flo or Clue) to export your data",
                  "Upload it to MoonRiver website through a secure portal",
                  "Your data is encrypted and anonymous—no one can trace it back to you"
                ]
              },
              {
                title: "We Check and Protect Your Data",
                items: [
                  "Your data is double-checked for accuracy and uniqueness by Validators using TEE",
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
                  "You can trade, use, or save them"
                ]
              }
            ].map((section, i) => (
              <Paper key={i} shadow="sm" p="md" style={{
                background: 'rgba(13, 22, 55, 0.75)',
                border: '1px solid rgba(142, 199, 255, 0.2)',
                backdropFilter: 'blur(8px)'
              }}>
                <Stack gap="sm">
                  <Group>
                    <ThemeIcon size="lg" radius="xl" color="cyan">
                      <Text fw={700}>{i + 1}</Text>
                    </ThemeIcon>
                    <Title order={4} style={{
                      fontFamily: 'Quicksand, sans-serif',
                      color: '#7EE7F3',
                      fontSize: '20px',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                    }}>{section.title}</Title>
                  </Group>
                  <List style={{
                    fontFamily: 'Quicksand, sans-serif',
                    color: '#E0E7FF',
                    lineHeight: 1.7
                  }}>
                    {section.items.map((item, j) => (
                      <List.Item key={j}>{item}</List.Item>
                    ))}
                  </List>
                </Stack>
              </Paper>
            ))}
          </Group>
        </Stack>
      </Stack>
    </Container>
  );
}
