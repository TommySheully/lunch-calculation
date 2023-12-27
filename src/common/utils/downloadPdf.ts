declare function html2pdf(el: any, config: any): void

export const savePdf = (value: string, name: string) =>
  html2pdf(document.getElementById(value), {
    filename: `${name}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
  })
