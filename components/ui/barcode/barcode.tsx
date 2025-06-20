"use client"
import React from 'react';
import { useBarcode } from 'next-barcode';

export function BarCode({ code }: { code: string }) {
  const { inputRef } = useBarcode({
    value: code,
    options: {
      background: '#f1f5f9',
      displayValue: false,
      height: 200,
    },
  });

  return <img ref={inputRef} alt="Barcode" className="w-full" />;
}
