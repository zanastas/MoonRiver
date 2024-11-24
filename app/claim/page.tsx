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
  Box,
  Group,
} from "@mantine/core";
import Link from "next/link";
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import styles from './styles.module.css';
import Image from 'next/image';

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
      "To download your Clue data, open the app and navigate to the More Menu (= icon in the top-right of the Cycle View). Go to Settings, tap Download my data, and then Request data. You'll receive an email with a download link and a password displayed in the app. Use the password to access your data, which will be sent in JSON format. Make sure to download the file within 72 hours.",
  },
  {
    number: 3,
    title: "Upload data and claim token",
    description:
      "Submit your data here to claim Moonlight (MOON) token.",
  },
];

export default function Page() {
  const [scroll] = useWindowScroll();
  
  return (
    <Box className={styles.backgroundContainer}>
      <div style={{ 
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        zIndex: -1,
      }}>
        <Image
          src="/moonlit-lake.jpg"
          alt="Moonlit lake background"
          fill
          style={{ 
            objectFit: 'cover',
            transform: `translateY(${scroll.y * -0.3}px)`,
            filter: 'brightness(0.7)',
          }}
          priority
        />
      </div>
      <div className={styles.overlay} />
      
      <Container pos="relative" style={{ zIndex: 1 }}>
        <Grid justify="center">
          <Grid.Col span={{ sm: 12, md: 8, lg: 6 }}>
            <Stack 
              align="stretch" 
              justify="center" 
              gap="xl"
              style={{
                position: 'relative',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Title 
                order={2} 
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: '#FF9EB1',
                  fontSize: '2.5rem',
                  textAlign: 'center',
                  marginBottom: '20px',
                  position: 'relative',
                  textShadow: '0 0 20px rgba(255, 158, 177, 0.5)',
                }}
              >
                Moon River
              </Title>
              {instructions.map((instruction, i) => (
                <Stack 
                  gap="sm" 
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '25px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <Group gap="xs" align="center">
                    <Text 
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        color: '#FF9EB1',
                        fontSize: '42px',
                        fontWeight: 700,
                        textShadow: '0 0 15px rgba(255, 158, 177, 0.5)',
                      }}
                    >
                      0{instruction.number}
                    </Text>
                    <Title 
                      order={4} 
                      style={{
                        fontFamily: 'Quicksand, sans-serif',
                        color: '#E0E7FF',
                        fontSize: '24px',
                        fontWeight: 600,
                        marginLeft: '12px',
                        lineHeight: 1.3,
                      }}
                    >
                      {instruction.title}
                    </Title>
                  </Group>
                  <Text 
                    style={{ 
                      fontFamily: 'Quicksand, sans-serif',
                      marginLeft: '54px',
                      color: '#B8C6DB',
                      lineHeight: 1.7,
                      fontSize: '16px',
                    }}
                  >
                    {instruction.description}
                  </Text>
                </Stack>
              ))}
              <Flex justify="center" mt="xl">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    style={{
                      background: 'linear-gradient(135deg, #FF9EB1 0%, #FF6B95 100%)',
                      fontFamily: 'Quicksand, sans-serif',
                      fontSize: '18px',
                      fontWeight: 600,
                      padding: '12px 36px',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #FF6B95 0%, #FF4778 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 20px rgba(255, 158, 177, 0.4)',
                      }
                    }}
                  >
                    Upload Data
                  </Button>
                </Link>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
