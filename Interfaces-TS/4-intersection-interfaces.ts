interface Printer {
  printerName: string;
  costByPage: number;
}

interface Scanner {
  scannerName: string;
  costBy10Pages: number;
}

interface Computer {
  costBy1Hour: number;
  windows: boolean;
}

type Shop = Printer & Scanner & Computer;

const saiCafe: Shop = {
  printerName: "p name",
  costByPage: 2,
  scannerName: "s name",
  costBy10Pages: 10,
  costBy1Hour: 10,
  windows: true,
};
