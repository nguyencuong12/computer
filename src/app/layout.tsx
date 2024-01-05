import "./globals.css";
// export const metadata = {
//   title: "GEARVN - Máy Tính Cao Cấp & Thiết Bị Chơi Game hàng đầu Việt Nam – GEARVN.COM",
//   description: "GEARVN - Cung cấp Hi-End PC, Laptop và Gaming Gear Chuyên Nghiệp- Website : www.gearvn.com- Hotline : 1800 6975",
// };
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
            <div className="bg-white w-full overflow-hidden">
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <NavbarComponent></NavbarComponent>
                </div>
              </div>
              <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} ${styles.fullHeight} `}>
                <div className={`${styles.boxWidth} `}>
                  <BodyComponent>{children}</BodyComponent>
                </div>
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
