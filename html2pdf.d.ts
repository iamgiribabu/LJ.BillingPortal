declare module 'html2pdf.js' {
    interface Html2PdfOptions {
        margin?: number | [number, number, number, number];
        filename?: string;
        image?: { type: string; quality: number };
        html2canvas?: { scale: number };
        jsPDF?: { unit: string; format: string; orientation: string };
    }

    interface Html2Pdf {
        set(options: Html2PdfOptions): Html2Pdf;
        from(element: HTMLElement | string): Html2Pdf;
        save(filename?: string): void;
        toPdf(): Promise<Html2Pdf>;
    }

    const html2pdf: () => Html2Pdf;
    export default html2pdf;
}