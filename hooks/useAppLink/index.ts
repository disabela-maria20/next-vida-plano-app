/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

const IOS_APP_LINK = 'https://apps.apple.com/br/app/vida-plano/id1664932847';
const ANDROID_APP_LINK =
  'https://play.google.com/store/apps/details?id=com.farol.vidaApp&hl=pt_BR';

export function useAppLink(): string | null {
  const [appLink, setAppLink] = useState<string | null>(null);

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      setAppLink(ANDROID_APP_LINK);
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      setAppLink(IOS_APP_LINK);
    } else {
      setAppLink(ANDROID_APP_LINK);
    }
  }, []);

  return appLink;
}
