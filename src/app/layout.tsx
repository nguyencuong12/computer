import "./globals.css";

import styles from "./style";

import { NavbarComponent, FooterComponent, BodyComponent } from "@/components";
import Provider from "./provider";
import StoreProvider from "./reduxProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Provider>
        <html lang="en">
          <body>
            <div className="bg-white  overflow-hidden">
              <NavbarComponent></NavbarComponent>

              {/* <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} ${styles.fullHeight} `}>
                <div className={`${styles.boxWidth} `}>
                  <BodyComponent>{children}</BodyComponent>
                </div>
              </div> */}
              <div className="bg-white relative min-h-screen ">
                <BodyComponent>{children}</BodyComponent>
              </div>

              <div className={`bg-[#F5F7FB] ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <FooterComponent />
                </div>
              </div>
            </div>
          </body>
        </html>
      </Provider>
    </StoreProvider>
  );
}
