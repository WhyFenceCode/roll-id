"use client"
import React from 'react';
import { useBarcode } from 'next-barcode';

export function BarCode({
  code
}:{
    code:string
}) {
    const { deviceBarCode } = useBarcode({
        value: code,
        options: {
        background: '#f1f5f9',
        }
    });

  return (
    <svg ref={deviceBarCode} className="w-full h-12"/>
  )
}