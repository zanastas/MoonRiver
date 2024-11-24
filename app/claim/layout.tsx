import { Box } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Box py={{ base: "0", sm: "0" }}>{children}</Box>;
}
