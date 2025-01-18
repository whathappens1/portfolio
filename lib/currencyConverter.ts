export type GulfCurrency = 'SAR' | 'AED' | 'KWD' | 'BHD' | 'OMR' | 'QAR';

interface ExchangeRates {
  [key: string]: number;
}

// أسعار الصرف الثابتة
const dummyRates: ExchangeRates = {
  SAR: 3.75,
  AED: 3.67,
  KWD: 0.31,
  BHD: 0.38,
  OMR: 0.38,
  QAR: 3.64
};

// دالة لتحويل الدولار إلى العملة الحالية
export function convertFromUSD(amount: number, currency: string) {
  const rate = dummyRates[currency];
  if (!rate) {
    console.error(`Exchange rate not found for ${currency}`);
    return amount;
  }
  return amount * rate;
}

// دالة لتحويل العملة الحالية إلى الدولار
export function convertToUSD(amount: number, currency:  string) {
  const rate = dummyRates[currency];
  if (!rate) {
    console.error(`Exchange rate not found for ${currency}`);
    return amount;
  }
  return amount / rate;
}

// دالة لتنسيق المبلغ مع رمز العملة الحالية
export function formatCurrency(amount: number, currency: string) {
  const formatter = new Intl.NumberFormat('en-SA', {
    style: 'currency',
    currency: currency.toUpperCase(),
  });
  return formatter.format(amount);
}
