import Button, { ButtonProps } from '@/components/ui/Button';
import { APP_CONFIG } from '@/lib/constants';

export interface DownloadButtonProps extends Omit<ButtonProps, 'children'> {
  text?: string;
  showIcon?: boolean;
}

export default function DownloadButton({
  text = 'Download Free',
  showIcon = true,
  ...props
}: DownloadButtonProps) {
  return (
    <Button
      variant="primary"
      size="lg"
      onClick={() => window.open(APP_CONFIG.playStoreUrl, '_blank')}
      {...props}
    >
      {showIcon && (
        <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.43L6.05 21.34l8.49-4.77-1.73-1.5zm3.35-1.99c.31-.24.5-.61.5-1.08 0-.47-.19-.84-.5-1.08l-2.45-1.37-1.91 1.66 1.91 1.66 2.45-1.37zM6.05 2.66l10.76 6.27-1.73 1.5-8.49-4.77L6.05 2.66z" />
        </svg>
      )}
      {text}
    </Button>
  );
}
