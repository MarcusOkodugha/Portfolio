export function downloadCv() {
    const link = document.createElement('a');
    link.href = './assets/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}