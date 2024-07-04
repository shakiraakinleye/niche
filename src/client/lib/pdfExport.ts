export const pdfExport = async (chartId: string) => {
  if (typeof window === "undefined") {
    console.error("html2pdf.js cannot be used on the server-side.");
    return;
  }

  const html2pdf = await import("html2pdf.js");
  const pdf = new html2pdf.default();
  const chart = document.getElementById(chartId);
  pdf.from(chart).save(`${chartId}-niche.pdf`);
};

//   todo - fix appearance and ???information provided
