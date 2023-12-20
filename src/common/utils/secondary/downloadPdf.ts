export  const savePdf = (value: string, name: string) => {
  const element = document.getElementById(value)
  const opt = {
    filename:     `${name}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
  }
  // @ts-ignore
  html2pdf(element, opt)
}
