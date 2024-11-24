"use client";

import { useConnectWallet, useNetworkStore, useWalletStore } from "@/app/core";
import { Icon } from "@iconify/react";
import {
  AppShell,
  Badge,
  Burger,
  Button,
  Center,
  Container,
  Flex,
  Group,
  Menu,
  SelectProps,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { title: "About", href: "/about" },
  { title: "Claim", href: "/claim" },
  { title: "Terms", href: "/terms" },
  { title: "Leaderboard", href: "/leaderboard" },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const network = useNetworkStore((state) => state.network);
  const setNetwork = useNetworkStore((state) => state.setNetwork);

  useEffect(() => {
    useNetworkStore.persist.rehydrate();
  }, []);

  const [sidebarOpened, { toggle: toggleSidebar }] = useDisclosure();
  const walletAddress = useWalletStore((state) => state.walletAddress);
  const { connect, disconnect } = useConnectWallet();
  const pathname = usePathname();

  const isActive = (path: string) => pathname.includes(path);

  useEffect(() => {
    if (sidebarOpened) {
      toggleSidebar();
    }
  }, [pathname]);

  const renderSelectOption: SelectProps["renderOption"] = ({ option }) => {
    if (option.value === "testnet") {
      return option.label;
    }

    return (
      <Group flex="1" gap="xs">
        {option.label}
        <Badge size="sm" variant="light" color="dark">
          Coming Soon
        </Badge>
      </Group>
    );
  };

  // if query string contains `internal`, show internal features
  let showInternalFeatures = false;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    showInternalFeatures = urlParams.has("internal");
  }

  return (
    <AppShell
      header={{ height: 110 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !sidebarOpened },
      }}
    >
      <AppShell.Header style={{ 
        background: 'transparent',
        border: 'none'
      }}>
        <div style={{ 
          background: 'rgba(13, 22, 55, 0.85)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(142, 199, 255, 0.2)',
          height: '72px'
        }}>
          <Container h="100%">
            <Group h="100%" align="center">
              <Group justify="space-between" w="100%">
                <Group>
                  <Burger
                    opened={sidebarOpened}
                    onClick={toggleSidebar}
                    hiddenFrom="sm"
                    size="sm"
                    color="#B4E4FF"
                  />

                  <Flex pos="relative" dir="row" align="center" gap="sm">
                    <Link href="/">
                      <Title order={5} style={{
                        fontFamily: 'Cinzel, serif',
                        color: '#7EE7F3',
                        textShadow: '0 0 10px rgba(126, 231, 243, 0.3)'
                      }}>
                        Moon River
                      </Title>
                    </Link>
                    <Menu shadow="md" width={250}>
                      <Menu.Target>
                        <UnstyledButton>
                          <Badge color="cyan" variant="light" size="lg">
                            {network as string}
                          </Badge>
                        </UnstyledButton>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Label>Network</Menu.Label>
                        <Menu.Item
                          onClick={() => setNetwork("moksha")}
                          leftSection={
                            network === "moksha" && (
                              <Icon icon="carbon:checkmark" />
                            )
                          }
                        >
                          Moksha Testnet
                        </Menu.Item>
                        <Menu.Item
                          disabled
                          onClick={() => setNetwork("mainnet")}
                          leftSection={
                            network === "mainnet" && (
                              <Icon icon="carbon:checkmark" />
                            )
                          }
                        >
                          <Group flex="1" gap="xs">
                            Vana Mainnet
                            <Badge size="sm" variant="light" color="dark">
                              Coming Soon
                            </Badge>
                          </Group>
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Flex>

                  <Group ml="lg" gap={0} visibleFrom="sm">
                    {links.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <UnstyledButton
                          p={12}
                          style={{
                            color: isActive(link.href) ? '#7EE7F3' : '#B4E4FF',
                            fontFamily: 'Quicksand, sans-serif',
                            transition: 'all 0.2s ease',
                            ':hover': {
                              textShadow: '0 0 10px rgba(126, 231, 243, 0.5)'
                            }
                          }}
                        >
                          <Text size="sm" fw="bold">
                            {link.title}
                          </Text>
                        </UnstyledButton>
                      </Link>
                    ))}
                  </Group>
                </Group>

                <Group>
                  {walletAddress ? (
                    <Button
                      variant="outline"
                      style={{
                        borderColor: 'rgba(126, 231, 243, 0.3)',
                        color: '#7EE7F3',
                        fontFamily: 'Quicksand, sans-serif',
                        ':hover': {
                          borderColor: 'rgba(126, 231, 243, 0.6)',
                          background: 'rgba(126, 231, 243, 0.1)'
                        }
                      }}
                      onClick={disconnect}
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      style={{
                        borderColor: 'rgba(126, 231, 243, 0.3)',
                        color: '#7EE7F3',
                        fontFamily: 'Quicksand, sans-serif',
                        ':hover': {
                          borderColor: 'rgba(126, 231, 243, 0.6)',
                          background: 'rgba(126, 231, 243, 0.1)'
                        }
                      }}
                      onClick={connect}
                    >
                      Connect
                    </Button>
                  )}
                </Group>
              </Group>
            </Group>
          </Container>
        </div>

        <Center p="xs" style={{ 
          background: 'rgba(13, 22, 55, 0.95)',
          borderBottom: '1px solid rgba(255, 158, 177, 0.2)',
          position: 'absolute',
          bottom: 0,
          width: '100%'
        }}>
          <Text style={{
            fontSize: '14px',
            color: '#FF9EB1',
            fontFamily: 'Quicksand, sans-serif',
            fontWeight: 600,
            textAlign: 'center',
            letterSpacing: '0.02em',
            textShadow: '0 0 10px rgba(255, 158, 177, 0.3)'
          }}>
            THIS IS A TESTNET. POINTS EARNED ON TESTNET HOLD NO VALUE AND ARE
            NOT INDICATIVE OF A FUTURE AIRDROP.
          </Text>
        </Center>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="default"
                fullWidth
                justify="flex-start"
                fw="bold"
                size="lg"
                disabled={isActive(link.href)}
              >
                {link.title}
              </Button>
            </Link>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main mt={40}>{children}</AppShell.Main>
    </AppShell>
  );
};
