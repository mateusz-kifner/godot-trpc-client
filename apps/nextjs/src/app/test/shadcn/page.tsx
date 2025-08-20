"use client";
// import { ThemeToggle } from "@/components/ui/theme";
import dynamic from "next/dynamic";
// import { IconLoader2 } from "@tabler/icons-react";
import { type ComponentType, Suspense, useId } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TestAccordion = dynamic(() => import("./_components/test-accordion"), {
  ssr: false,
});
const TestAlert = dynamic(() => import("./_components/test-alert"), {
  ssr: false,
});
const TestAlertDialog = dynamic(
  () => import("./_components/test-alert-dialog"),
  { ssr: false },
);
const TestAspectRatio = dynamic(
  () => import("./_components/test-aspect-ratio"),
  { ssr: false },
);
const TestBadge = dynamic(() => import("./_components/test-badge"), {
  ssr: false,
});
const TestBreadcrumb = dynamic(() => import("./_components/test-breadcrumb"), {
  ssr: false,
});
const TestButton = dynamic(() => import("./_components/test-button"), {
  ssr: false,
});
const TestCalendar = dynamic(() => import("./_components/test-calendar"), {
  ssr: false,
});

const TestCard = dynamic(() => import("./_components/test-card"), {
  ssr: false,
});
const TestCarousel = dynamic(() => import("./_components/test-carousel"), {
  ssr: false,
});
// const TestChart = dynamic(
// 	() => import("./_components/test-chart"),
// 	{
// 		ssr: false,
// 	},
// );
const TestCheckbox = dynamic(() => import("./_components/test-checkbox"), {
  ssr: false,
});
const TestCollapsible = dynamic(
  () => import("./_components/test-collapsible"),
  { ssr: false },
);
const TestCombobox = dynamic(() => import("./_components/test-combobox"), {
  ssr: false,
});
const TestCommand = dynamic(() => import("./_components/test-command"), {
  ssr: false,
});
const TestContextMenu = dynamic(
  () => import("./_components/test-context-menu"),
  { ssr: false },
);
const TestDialog = dynamic(() => import("./_components/test-dialog"), {
  ssr: false,
});
const TestDrawer = dynamic(() => import("./_components/test-drawer"), {
  ssr: false,
});
const TestDropdownMenu = dynamic(
  () => import("./_components/test-dropdown-menu"),
  { ssr: false },
);
const TestForm = dynamic(() => import("./_components/test-form"), {
  ssr: false,
});
const TestHoverCard = dynamic(() => import("./_components/test-hover-card"), {
  ssr: false,
});
const TestInputOTP = dynamic(() => import("./_components/test-input-otp"), {
  ssr: false,
});
const TestInput = dynamic(() => import("./_components/test-input"), {
  ssr: false,
});
const TestLabel = dynamic(() => import("./_components/test-label"), {
  ssr: false,
});
const TestMenubar = dynamic(() => import("./_components/test-menubar"), {
  ssr: false,
});
const TestNavigationMenu = dynamic(
  () => import("./_components/test-navigation-menu"),
  { ssr: false },
);
const TestPagination = dynamic(() => import("./_components/test-pagination"), {
  ssr: false,
});
const TestPaginationPrimitive = dynamic(
  () => import("./_components/test-pagination-primitive"),
  { ssr: false },
);
const TestPopover = dynamic(() => import("./_components/test-popover"), {
  ssr: false,
});
const TestProgress = dynamic(() => import("./_components/test-progress"), {
  ssr: false,
});
const TestRatioGroup = dynamic(() => import("./_components/test-ratio-group"), {
  ssr: false,
});
const TestResizable = dynamic(() => import("./_components/test-resizable"), {
  ssr: false,
});
const TestScrollArea = dynamic(() => import("./_components/test-scroll-area"), {
  ssr: false,
});
const TestSelect = dynamic(() => import("./_components/test-select"), {
  ssr: false,
});
const TestSeparator = dynamic(() => import("./_components/test-separator"), {
  ssr: false,
});
const TestSheet = dynamic(() => import("./_components/test-sheet"), {
  ssr: false,
});
const TestSkeleton = dynamic(() => import("./_components/test-skeleton"), {
  ssr: false,
});
const TestSlider = dynamic(() => import("./_components/test-slider"), {
  ssr: false,
});
const TestSonner = dynamic(() => import("./_components/test-sonner"), {
  ssr: false,
});
const TestSwitch = dynamic(() => import("./_components/test-switch"), {
  ssr: false,
});
const TestTable = dynamic(() => import("./_components/test-table"), {
  ssr: false,
});
const TestTabs = dynamic(() => import("./_components/test-tabs"), {
  ssr: false,
});
const TestTextarea = dynamic(() => import("./_components/test-textarea"), {
  ssr: false,
});
const TestToggle = dynamic(() => import("./_components/test-toggle"), {
  ssr: false,
});
const TestTooltip = dynamic(() => import("./_components/test-tooltip"), {
  ssr: false,
});

const UIElements: {
  title: string;
  description?: string;
  Element: ComponentType;
  className?: string;
}[] = [
  {
    title: "Accordion",
    Element: TestAccordion,
  },
  {
    title: "Alert",
    Element: TestAlert,
    className: "flex-col",
  },
  {
    title: "AlertDialog",
    Element: TestAlertDialog,
  },
  {
    title: "AspectRatio",
    description: "16 / 9",
    Element: TestAspectRatio,
  },
  {
    title: "Badge",
    Element: TestBadge,
  },
  {
    title: "Breadcrumb",
    Element: TestBreadcrumb,
  },
  {
    title: "Button",
    Element: TestButton,
    className: "flex-col",
  },
  {
    title: "Calendar",
    Element: TestCalendar,
  },
  {
    title: "Card",
    Element: TestCard,
  },
  {
    title: "Carousel",
    Element: TestCarousel,
    className: "justify-center",
  },
  // {
  // 	title: "Chart",
  // 	Element: TestChart,
  // },
  {
    title: "Checkbox",
    Element: TestCheckbox,
    className: "flex-col",
  },
  {
    title: "Collapsible",
    Element: TestCollapsible,
    className: "flex-col",
  },
  {
    title: "Combobox",
    Element: TestCombobox,
  },
  {
    title: "Command",
    Element: TestCommand,
  },
  {
    title: "ContextMenu",
    Element: TestContextMenu,
  },
  {
    title: "Dialog",
    Element: TestDialog,
  },
  {
    title: "Drawer",
    Element: TestDrawer,
  },
  {
    title: "DropdownMenu",
    Element: TestDropdownMenu,
    className: "justify-center",
  },

  {
    title: "Form",
    Element: TestForm,
  },
  {
    title: "HoverCard",
    Element: TestHoverCard,
    className: "justify-center",
  },
  {
    title: "InputOTP",
    Element: TestInputOTP,
    className: "flex-col",
  },
  {
    title: "Input",
    Element: TestInput,
    className: "flex-col",
  },
  {
    title: "Label",
    Element: TestLabel,
    className: "flex-col",
  },
  {
    title: "Menubar",
    Element: TestMenubar,
  },
  {
    title: "NavigationMenu",
    Element: TestNavigationMenu,
  },
  {
    title: "Pagination",
    Element: TestPagination,
    className: "flex-col",
  },
  {
    title: "Pagination Primitive",
    Element: TestPaginationPrimitive,
    className: "flex-col",
  },
  {
    title: "Popover",
    Element: TestPopover,
  },
  {
    title: "Progress",
    Element: TestProgress,
  },
  {
    title: "RatioGroup",
    Element: TestRatioGroup,
  },
  {
    title: "Resizable",
    Element: TestResizable,
  },
  {
    title: "ScrollArea",
    Element: TestScrollArea,
  },
  {
    title: "Select",
    Element: TestSelect,
    className: "flex-col",
  },
  {
    title: "Separator",
    Element: TestSeparator,
  },
  {
    title: "Sheet",
    Element: TestSheet,
  },
  {
    title: "Skeleton",
    Element: TestSkeleton,
    className: "flex-col",
  },
  {
    title: "Slider",
    Element: TestSlider,
    className: "flex-col gap-7 pb-7",
  },
  {
    title: "Sonner",
    Element: TestSonner,
  },
  {
    title: "Switch",
    Element: TestSwitch,
  },
  {
    title: "Table",
    Element: TestTable,
  },
  {
    title: "Tabs",
    Element: TestTabs,
    className: "justify-center",
  },
  {
    title: "TextArea",
    Element: TestTextarea,
    className: "flex-col",
  },
  {
    title: "Toggle",
    Element: TestToggle,
    className: "flex-col",
  },
  {
    title: "Tooltip",
    Element: TestTooltip,
    className: "flex-col",
  },
];

function ShadCN() {
  // const { toggleTheme, theme } = useUserContext();
  const uuid = useId();
  console.log("test");
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-4 p-2 pb-96">
      {/* <ThemeToggle /> */}
      {UIElements.map((val, index) => (
        <Card
          key={`${uuid}${
            // biome-ignore lint/suspicious/noArrayIndexKey: this is test
            index
          }:`}
        >
          <CardHeader>
            <CardTitle>{val.title}</CardTitle>
            {val.description !== undefined && (
              <CardDescription>{val.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className={cn("flex gap-2 p-2", val.className)}>
            <Suspense
              fallback={
                null
                // <IconLoader2 className="direction-reverse animate-spin" />
              }
            >
              <val.Element />
            </Suspense>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ShadCN;

// export const getStaticProps: GetStaticProps = () => {
//   if (process.env.NODE_ENV === "production") {
//     return { notFound: true };
//   }
//   return { props: {} };
// };
