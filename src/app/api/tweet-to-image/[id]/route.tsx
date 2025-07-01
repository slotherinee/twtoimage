import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'
import fetchTweet from './fetchTweet'

export const runtime = 'edge'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) return new Response(JSON.stringify({ error: 'Missing tweet id' }), { status: 400 });
  const tweet = await fetchTweet(id)
  const { text, author, authorAvatar, authorNickname } = tweet

  const width = 556;
  const fontSize = 15;
  const lineHeight = 1.3125 * fontSize;
  const charsPerLine = 50;
  const textLines = text.split('\n').map((line: string) => Math.ceil(line.length / charsPerLine)).reduce((a: number, b: number) => a + b, 0);
  const textBlockHeight = textLines * lineHeight;
  const authorBlockHeight = 15 * 1.2 * 2 + 12;
  const avatarHeight = 40;
  const verticalPadding = 16 * 2;
  const buffer = 8;
  const contentHeight = Math.max(avatarHeight, authorBlockHeight + textBlockHeight);
  const height = Math.ceil(verticalPadding + contentHeight + buffer);

  return new ImageResponse(
    (
      <div style={{ 
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: 16,
        backgroundColor: '#ffffff',
        fontFamily: 'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        color: '#0f1419'
      }}>
        { /* eslint-disable-next-line @next/next/no-img-element */ }
        <img src={authorAvatar} width={40} height={40} alt={`${author} avatar`} style={{ 
          borderRadius: '50%',
          flexShrink: 0
        }}/>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          flex: 1,
          minWidth: 0
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 12 }}>
            <strong style={{ 
              fontSize: 15, 
              color: '#0f1419',
              fontWeight: "bold",
              lineHeight: 1.2
            }}>{author}</strong>
            <span style={{ 
              color: '#536471', 
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.2
            }}>@{authorNickname}</span>
          </div>
          <div style={{ 
            margin: 0, 
            fontSize: 15, 
            lineHeight: 1.3125,
            color: '#0f1419',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}>{text}</div>
        </div>
      </div>
    ),
    {
      width,
      height
    }
  )
}
