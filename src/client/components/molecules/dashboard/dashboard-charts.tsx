import { Card, Title, AreaChart, DonutChart, Legend } from "@tremor/react";
import { FileDown } from "lucide-react";

import useWindowSize from "@/client/lib/hooks/use-window-size";
import { pdfExport } from "@/client/lib/pdfExport";
import { priceFormatter } from "@/client/lib/utils";

import { Button } from "../../atoms/button";
import { FilterButtons, FilterList } from "../../atoms/filter-list";

type SalesReportProps = {
  data: { category: string; date: string }[];
  filterOptions: string[];
  initialSelectedOption: string;
  selectedOption: string;
  setSelected: (value: string) => void;
};

const ExportButton = ({ id }: { id: string }) => {
  return (
    <Button
      type="button"
      className="flex shrink-0 gap-1 border-1.5 border-zinc-300 bg-transparent px-1.5 py-1 font-default text-zinc-900 hover:bg-beige-400 2xl:gap-2"
      onClick={() => pdfExport(id)}
    >
      <FileDown className="h-3 w-3 text-inherit" strokeWidth="1.5" />
      <span className="text-xxs font-bold text-inherit md:text-xxs lg:text-xxs xl:text-xxs 2xl:text-xs">
        Export PDF
      </span>
    </Button>
  );
};

export const SalesReportChart = ({
  data,
  filterOptions,
  selectedOption,
  setSelected,
}: SalesReportProps) => {
  const { isMobile } = useWindowSize();

  return (
    <Card className="flex h-full flex-col justify-between bg-white">
      <div className="flex items-center gap-2 lg:justify-between 2xl:gap-4">
        <Title className="grow font-display font-bold text-zinc-900 lg:grow-0">
          Sales Report
        </Title>
        {isMobile ? (
          <FilterList
            options={filterOptions}
            selectedOption={selectedOption}
            setSelected={setSelected}
          />
        ) : (
          <FilterButtons
            buttonClassName="px-2 py-1.5 2xl:px-3 text-xxs md:text-xxs lg:text-xxs xl:text-xxs 2xl:text-xs text-zinc-500 border-transparent font-default hover:bg-beige-400 border-1.5 rounded-smd"
            activeButtonClassName="font-bold text-zinc-900 border-zinc-400 bg-transparent"
            options={filterOptions}
            selectedOption={selectedOption}
            setSelected={setSelected}
          />
        )}
        <ExportButton id="sales-report" />
      </div>
      <AreaChart
        className="mt-6 h-32 font-default md:h-44 2xl:mt-8 2xl:h-56"
        id="sales-report"
        data={data}
        index="date"
        categories={["sales"]}
        colors={["gray"]}
        valueFormatter={(value) => priceFormatter(value, "", "symbol")}
        showYAxis={false}
        showLegend={false}
        connectNulls={true}
      />
    </Card>
  );
};

export const SalesByCategoriesChart = ({
  data,
}: {
  data: { category: string; sales: string }[];
}) => {
  return (
    <Card className="grid h-full grid-cols-2 items-end justify-between gap-6 bg-white lg:flex lg:flex-col lg:items-start 2xl:gap-8">
      <Title className="col-span-2 font-display font-bold text-zinc-900">
        Sales By Category
      </Title>
      <DonutChart
        variant="pie"
        className="h-32 font-default md:h-32 2xl:h-40"
        data={data}
        category="sales"
        index="category"
        valueFormatter={(value) => priceFormatter(value, "", "symbol")}
        colors={["blue", "violet", "amber", "rose", "cyan", "gray"]}
      />
      <Legend
        className="grid grid-cols-2 gap-1 2xl:gap-2 "
        categories={data.map((category) => category.category)}
        colors={["blue", "violet", "amber", "rose", "cyan", "gray"]}
      />
    </Card>
  );
};
