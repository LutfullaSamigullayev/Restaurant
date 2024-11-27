import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import { Icons } from "./icons/icons";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Menu",
  },
  {
    segment: "all",
    title: "Hammasi",
    icon: <DashboardIcon />,
  },
  {
    segment: "soup",
    title: "Sho'rva",
    icon: <SoupKitchenIcon />,
  },
  {
    segment: "beef",
    title: "Mol goshti",
    icon: <Icons.beef />,
  },
  {
    segment: "lamb",
    title: "Qo'y goshti",
    icon: <Icons.lamb />,
  },
  {
    segment: "chicken",
    title: "To'vuq goshti",
    icon: <Icons.chicken />,
  },
  {
    segment: "fish",
    title: "Baliq",
    icon: <Icons.fish />,
  },
  {
    segment: "fastfood",
    title: "Fast Food",
    icon: <Icons.fastfood />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter("/all");

  console.log(router);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={3}>
              <Skeleton height={200} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={200} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={200} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={200} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutBasic;
