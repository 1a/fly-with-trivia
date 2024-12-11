import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body>
        <div className="bg-gradient-to-b from-[#259FF7] to-[#5077EE] w-full h-full fixed overflow-scroll flex flex-col">
            <div className="flex justify-between p-8 items-center flex-none">
                <svg width="169" height="41" viewBox="0 0 169 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M167.993 19.7164C167.895 20.1195 167.674 20.4812 167.366 20.7588C166.958 21.1255 166.477 21.5712 165.923 22.096C165.133 22.8213 164.28 23.632 163.363 24.528C162.445 25.4027 161.507 26.3307 160.547 27.312V27.312C159.505 28.354 160.255 30.096 161.729 30.096H163.177C164.443 30.096 165.375 31.284 165.072 32.5141V32.5141C164.858 33.3866 164.075 34 163.177 34H153.573C152.332 34 151.419 32.8396 151.71 31.6338V31.6338C151.776 31.3587 151.902 31.1014 152.082 30.8823C152.633 30.2085 153.246 29.4878 153.923 28.72C154.733 27.824 155.565 26.9173 156.419 26C157.293 25.0827 158.157 24.208 159.011 23.376V23.376C159.86 22.547 159.28 21.072 158.093 21.072H156.863C155.709 21.072 154.861 19.9899 155.136 18.8694L155.189 18.6539C155.404 17.7814 156.186 17.168 157.085 17.168H166.068C167.363 17.168 168.317 18.3804 168.012 19.6392L167.993 19.7164Z"
                        fill="white"/>
                    <path
                        d="M147.5 32.4659C147.284 33.3656 146.48 34 145.555 34H144.927C143.636 34 142.683 32.7941 142.981 31.5376L146.031 18.7056C146.245 17.8043 147.05 17.168 147.977 17.168H148.629C149.922 17.168 150.875 18.3765 150.574 19.6339L147.5 32.4659ZM149.436 15.12C148.775 15.12 148.178 14.928 147.644 14.544C147.111 14.1387 146.844 13.5307 146.844 12.72C146.844 12.272 146.93 11.856 147.1 11.472C147.292 11.0667 147.538 10.7253 147.836 10.448C148.135 10.1493 148.476 9.91467 148.86 9.744C149.266 9.57333 149.692 9.488 150.14 9.488C150.802 9.488 151.399 9.69067 151.932 10.096C152.466 10.48 152.732 11.0773 152.732 11.888C152.732 12.336 152.636 12.7627 152.444 13.168C152.274 13.552 152.039 13.8933 151.74 14.192C151.442 14.4693 151.09 14.6933 150.684 14.864C150.3 15.0347 149.884 15.12 149.436 15.12Z"
                        fill="white"/>
                    <path
                        d="M138.904 17.168C140.195 17.168 141.148 18.3736 140.85 19.6301L139.162 26.736C138.864 27.952 138.778 29.1787 138.906 30.416C138.937 30.7076 138.975 30.9919 139.019 31.2688C139.221 32.5328 138.44 33.8518 137.173 34.0328L135.968 34.2049C135.621 34.2545 135.292 34.1043 135.148 33.7841V33.7841C134.921 33.2797 134.267 33.0691 133.791 33.351C133.447 33.5551 133.083 33.7394 132.698 33.904C131.952 34.224 131.12 34.384 130.202 34.384C128.944 34.384 127.92 34.16 127.13 33.712C126.362 33.2427 125.786 32.6347 125.402 31.888C125.018 31.12 124.805 30.2453 124.762 29.264C124.741 28.2827 124.858 27.28 125.114 26.256L126.923 18.7023C127.139 17.8025 127.943 17.168 128.868 17.168H129.528C130.819 17.168 131.772 18.3738 131.473 19.6303L129.914 26.192C129.808 26.6613 129.712 27.1413 129.626 27.632C129.562 28.1227 129.562 28.5813 129.626 29.008C129.69 29.4133 129.85 29.7547 130.106 30.032C130.384 30.288 130.81 30.416 131.386 30.416C131.877 30.416 132.325 30.3307 132.73 30.16C132.978 30.0485 133.233 29.8939 133.495 29.696C133.888 29.4001 134.093 28.9289 134.148 28.4407C134.181 28.1452 134.221 27.8437 134.266 27.536C134.373 26.9387 134.48 26.3947 134.586 25.904L136.301 18.7048C136.515 17.8038 137.32 17.168 138.246 17.168H138.904Z"
                        fill="white"/>
                    <path
                        d="M106.419 27.472C106.419 25.808 106.696 24.3147 107.251 22.992C107.827 21.6693 108.605 20.5493 109.587 19.632C110.589 18.7147 111.752 18.0107 113.075 17.52C114.397 17.0293 115.827 16.784 117.363 16.784C118.827 16.784 120.32 17.0105 121.842 17.4635C122.794 17.7468 123.304 18.7483 123.074 19.7144L118.625 38.3836C118.41 39.2844 117.605 39.92 116.679 39.92H115.968C114.704 39.92 113.771 38.7397 114.062 37.5093L114.279 36.5963C114.561 35.4054 113.307 34.32 112.083 34.32V34.32C111.272 34.32 110.515 34.1707 109.811 33.872C109.128 33.552 108.531 33.104 108.019 32.528C107.528 31.9307 107.133 31.2053 106.835 30.352C106.557 29.4987 106.419 28.5387 106.419 27.472ZM117.907 21.508C117.994 21.1479 117.764 20.7855 117.395 20.752V20.752C117.16 20.7307 116.925 20.72 116.691 20.72C115.816 20.72 115.037 20.8907 114.355 21.232C113.672 21.5733 113.085 22.0427 112.595 22.64C112.125 23.216 111.763 23.8987 111.507 24.688C111.272 25.456 111.155 26.2667 111.155 27.12C111.155 28.336 111.357 29.1787 111.763 29.648C112.168 30.1173 112.723 30.352 113.427 30.352C113.832 30.352 114.227 30.2987 114.611 30.192C114.806 30.1303 115.011 30.0488 115.226 29.9475C115.707 29.7213 116.025 29.2621 116.15 28.7463L117.907 21.508Z"
                        fill="white"/>
                    <path
                        d="M101.5 32.4659C101.284 33.3656 100.48 34 99.5547 34H98.9272C97.6357 34 96.6828 32.7941 96.9814 31.5376L100.031 18.7056C100.245 17.8043 101.05 17.168 101.977 17.168H102.629C103.922 17.168 104.875 18.3765 104.574 19.6339L101.5 32.4659ZM103.436 15.12C102.775 15.12 102.178 14.928 101.644 14.544C101.111 14.1387 100.844 13.5307 100.844 12.72C100.844 12.272 100.93 11.856 101.1 11.472C101.292 11.0667 101.538 10.7253 101.836 10.448C102.135 10.1493 102.476 9.91467 102.86 9.744C103.266 9.57333 103.692 9.488 104.14 9.488C104.802 9.488 105.399 9.69067 105.932 10.096C106.466 10.48 106.732 11.0773 106.732 11.888C106.732 12.336 106.636 12.7627 106.444 13.168C106.274 13.552 106.039 13.8933 105.74 14.192C105.442 14.4693 105.09 14.6933 104.684 14.864C104.3 15.0347 103.884 15.12 103.436 15.12Z"
                        fill="white"/>
                    <path
                        d="M93.6507 32.7939C93.4322 33.6897 92.6268 34.3425 91.7106 34.2391C90.9134 34.1491 90.2414 33.9841 89.6945 33.744C88.8412 33.3387 88.2225 32.7947 87.8385 32.112C87.4758 31.4293 87.2945 30.6507 87.2945 29.776C87.3158 28.88 87.4438 27.9307 87.6785 26.928L91.4302 11.2418C91.6191 10.452 92.2668 9.85482 93.0693 9.73056L93.7518 9.62487C95.1585 9.40707 96.336 10.6868 96.0021 12.0705L92.2545 27.6C92.1692 27.984 92.1158 28.336 92.0945 28.656C92.0945 28.976 92.1585 29.264 92.2865 29.52C92.4145 29.7547 92.6278 29.9467 92.9265 30.096V30.096C93.5675 30.3952 94.0862 31.0084 93.9186 31.6956L93.6507 32.7939Z"
                        fill="white"/>
                    <path
                        d="M70.2938 27.408C70.2938 26.0427 70.5284 24.72 70.9978 23.44C71.4884 22.16 72.1711 21.0293 73.0458 20.048C73.9204 19.0453 74.9764 18.2453 76.2138 17.648C77.4724 17.0293 78.8591 16.72 80.3738 16.72C81.1204 16.72 81.8138 16.8267 82.4538 17.04C83.0938 17.2533 83.6484 17.5627 84.1178 17.968C84.6084 18.3733 84.9818 18.8747 85.2378 19.472C85.5151 20.048 85.6538 20.7093 85.6538 21.456C85.6538 22.6507 85.3871 23.664 84.8538 24.496C84.3204 25.328 83.5738 26.0107 82.6138 26.544C81.6751 27.056 80.5551 27.4293 79.2538 27.664C78.5965 27.7825 77.9093 27.8711 77.1922 27.9298C76.0461 28.0235 75.0522 29.2273 75.9578 29.936V29.936C76.4698 30.2987 77.2698 30.48 78.3578 30.48C79.0404 30.48 79.7338 30.4267 80.4378 30.32V30.32C81.4575 30.1346 82.5176 30.7952 82.6146 31.8271L82.6455 32.1558C82.7215 32.9637 82.2535 33.7291 81.4677 33.9314C81.1598 34.0107 80.8272 34.0869 80.4698 34.16C79.5524 34.352 78.5498 34.448 77.4618 34.448C76.1391 34.448 75.0191 34.2667 74.1018 33.904C73.2058 33.52 72.4698 33.008 71.8938 32.368C71.3391 31.728 70.9338 30.9813 70.6778 30.128C70.4218 29.2747 70.2938 28.368 70.2938 27.408ZM79.6058 20.496C78.5178 20.496 77.5578 20.8907 76.7258 21.68C76.484 21.909 76.2669 22.1608 76.0745 22.4354C75.335 23.4905 76.3631 24.7379 77.6382 24.5526C77.8849 24.5168 78.114 24.4766 78.3258 24.432C79.1364 24.24 79.7658 24.016 80.2138 23.76C80.6618 23.504 80.9604 23.2267 81.1098 22.928C81.2591 22.6293 81.3338 22.3307 81.3338 22.032C81.3338 21.008 80.7578 20.496 79.6058 20.496Z"
                        fill="white"/>
                    <path
                        d="M62.6 16.88C63.5173 16.88 64.3067 17.0187 64.968 17.296C65.6293 17.552 66.1733 17.9253 66.6 18.416C67.0267 18.8853 67.3467 19.4507 67.56 20.112C67.7733 20.7733 67.88 21.488 67.88 22.256C67.88 23.152 67.7733 24.0373 67.56 24.912L65.7514 32.4657C65.5359 33.3655 64.7315 34 63.8063 34H63.1464C61.8551 34 60.9022 32.7944 61.2005 31.538L62.728 25.104C62.8133 24.7413 62.888 24.3573 62.952 23.952C63.0373 23.5467 63.08 23.1627 63.08 22.8C63.08 22.2453 62.9307 21.776 62.632 21.392C62.3547 20.9867 61.8107 20.784 61 20.784C60.6587 20.784 60.328 20.8053 60.008 20.848V20.848C59.4574 20.9267 59.0297 21.3524 58.9004 21.8934L56.3748 32.4648C56.1597 33.365 55.3551 34 54.4295 34H53.7752C52.4823 34 51.5292 32.7918 51.8302 31.5344L56.6875 11.2415C56.8765 10.4518 57.5242 9.85484 58.3265 9.7306L59.0042 9.62567C60.4122 9.40766 61.5901 10.6899 61.2536 12.0744L60.3149 15.9372C60.1718 16.5258 60.6889 17.0659 61.288 16.976V16.976C61.736 16.912 62.1733 16.88 62.6 16.88Z"
                        fill="white"/>
                    <path
                        d="M35.4963 17.1057C35.6033 17.5827 36.0171 17.9375 36.5059 17.9375H39.7078C40.309 17.9375 40.7761 17.4095 40.669 16.8179C39.1536 8.44762 32.5524 1.84639 24.1821 0.330966C23.5905 0.223853 23.0625 0.690969 23.0625 1.29221V4.49408C23.0625 4.98292 23.4173 5.39667 23.8943 5.50368C29.6608 6.79733 34.2027 11.3392 35.4963 17.1057ZM40.669 24.1821C40.7761 23.5905 40.309 23.0625 39.7078 23.0625H36.5059C36.0171 23.0625 35.6033 23.4173 35.4963 23.8943C34.2027 29.6608 29.6608 34.2027 23.8943 35.4963C23.4173 35.6033 23.0625 36.0171 23.0625 36.5059V39.7078C23.0625 40.309 23.5905 40.7761 24.1821 40.669C32.5524 39.1536 39.1536 32.5524 40.669 24.1821ZM1.29221 23.0625C0.690967 23.0625 0.223853 23.5905 0.330966 24.1821C1.84639 32.5524 8.44762 39.1536 16.8179 40.669C17.4095 40.7761 17.9375 40.309 17.9375 39.7078V36.5059C17.9375 36.0171 17.5827 35.6033 17.1057 35.4963C11.3392 34.2027 6.79733 29.6608 5.50368 23.8943C5.39667 23.4173 4.98292 23.0625 4.49408 23.0625H1.29221ZM0.330966 16.8179C0.223853 17.4095 0.690969 17.9375 1.29221 17.9375H4.49408C4.98292 17.9375 5.39667 17.5827 5.50368 17.1057C6.79733 11.3392 11.3392 6.79733 17.1057 5.50368C17.5827 5.39667 17.9375 4.98292 17.9375 4.49408V1.29221C17.9375 0.690967 17.4095 0.223853 16.8179 0.330966C8.44762 1.84639 1.84639 8.44762 0.330966 16.8179ZM16.6562 12.8125C16.6562 11.3951 15.5111 10.25 14.0938 10.25C12.6764 10.25 11.5312 11.3951 11.5312 12.8125V28.1875C11.5312 29.6049 12.6764 30.75 14.0938 30.75C15.5111 30.75 16.6562 29.6049 16.6562 28.1875V24.0625C16.6562 23.5102 17.104 23.0625 17.6562 23.0625H23.3438C23.896 23.0625 24.3438 23.5102 24.3438 24.0625V28.1875C24.3438 29.6049 25.4889 30.75 26.9062 30.75C28.3236 30.75 29.4688 29.6049 29.4688 28.1875V12.8125C29.4688 11.3951 28.3236 10.25 26.9062 10.25C25.4889 10.25 24.3438 11.3951 24.3438 12.8125V16.9375C24.3438 17.4898 23.896 17.9375 23.3438 17.9375H17.6562C17.104 17.9375 16.6562 17.4898 16.6562 16.9375V12.8125Z"
                        fill="white"/>
                </svg>
                <div>
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </div>
            <div className="grow">
                {children}
            </div>
        </div>
        </body>
        </html>
      </ClerkProvider>
  )
}