import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const alt = 'Anoop Kurup | I fix sales for services businesses';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#172554',
          padding: '80px 96px',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div
          style={{
            width: 88,
            height: 8,
            background: '#f97316',
            marginBottom: 48,
          }}
        />
        <div
          style={{
            fontSize: 76,
            color: '#ffffff',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: 32,
          }}
        >
          I fix sales for services businesses.
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#93c5fd',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Anoop Kurup · anoopkurup.com
        </div>
      </div>
    ),
    { ...size }
  );
}
