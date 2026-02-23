import { useState, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PdfSlideViewerProps {
  pdfUrl: string
}

export default function PdfSlideViewer({ pdfUrl }: PdfSlideViewerProps) {
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }, [])

  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1))
  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, numPages))

  return (
    <div style={{
      margin: '1.5rem 0',
      background: '#18181b',
      borderRadius: '12px',
      border: '1px solid #27272a',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem 0',
        minHeight: 200,
        overflow: 'hidden',
      }}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div style={{ color: '#71717a', padding: '3rem' }}>PDF 로딩 중...</div>
          }
          error={
            <div style={{ color: '#ef4444', padding: '3rem' }}>PDF를 불러올 수 없습니다.</div>
          }
        >
          <Page
            pageNumber={currentPage}
            width={660}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {numPages > 0 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.75rem 1rem',
          borderTop: '1px solid #27272a',
          background: '#0f0f11',
        }}>
          <button
            onClick={goToPrev}
            disabled={currentPage <= 1}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              border: '1px solid #3f3f46',
              background: currentPage <= 1 ? '#1c1c1f' : '#27272a',
              color: currentPage <= 1 ? '#52525b' : '#e5e7eb',
              cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
              fontSize: '0.85rem',
              transition: 'background 0.15s',
            }}
          >
            ← 이전
          </button>
          <span style={{ color: '#a1a1aa', fontSize: '0.85rem', minWidth: '5rem', textAlign: 'center' }}>
            {currentPage} / {numPages}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage >= numPages}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              border: '1px solid #3f3f46',
              background: currentPage >= numPages ? '#1c1c1f' : '#27272a',
              color: currentPage >= numPages ? '#52525b' : '#e5e7eb',
              cursor: currentPage >= numPages ? 'not-allowed' : 'pointer',
              fontSize: '0.85rem',
              transition: 'background 0.15s',
            }}
          >
            다음 →
          </button>
        </div>
      )}
    </div>
  )
}
