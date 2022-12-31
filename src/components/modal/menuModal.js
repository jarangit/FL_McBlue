import React, {  useEffect, useState } from 'react'

// const safeDocument = typeof document !== 'undefined' ? document : {};

const MenuModal = ({ onClose, show }) => {
  const [showCardMenu, setShowCardMenu] = useState(false)
  // const scrollBlocked = useRef();
  // const html = safeDocument.documentElement;
  // const { body } = safeDocument;
  // const blockScroll = () => {
  //   if (!body || !body.style || scrollBlocked.current) return;

  //   const scrollBarWidth = window.innerWidth - html.clientWidth;
  //   const bodyPaddingRight =
  //     parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;
  //   html.style.position = 'relative'; /* [1] */
  //   html.style.overflow = 'hidden'; /* [2] */
  //   body.style.position = 'relative'; /* [1] */
  //   body.style.overflow = 'hidden'; /* [2] */
  //   body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

  //   scrollBlocked.current = true;
  // };
  useEffect(() => {
    if (show) {
      // blockScroll()
      setTimeout(() => {
        setShowCardMenu(true)
      }, 300);
      console.log("render mb menu")

    }
  }, [show])

  return (
    <>
      <div className={`fixed h-screen z-[99] w-full backdrop-sepia-0 bg-white/70 md:hidden overflow-hidden transition-all ${show ? "max-h-[1000px]" : "max-h-0"}`} onClick ={() => onClose(false
        )}>
        <div className='flex items-center justify-center h-full px-3'>
          <div className={`flex gap-2  relative overflow-hidden transition-all duration-700 justify-between w-full ${showCardMenu ? "top-0" : "-top-24"}`}>
            <div className={`my_card_blue p-3 flex flex-col items-center rounded-xl border border-yellow-dark !w-[100px]`}>
              <div className=' mx-auto'>
                <img src="https://ideabet.org/theme/mcblue/wp-content/uploads/2022/03/download-1.png" alt="" width={45} />
              </div>
              <div>โปรโมชั่น</div>
            </div>
            <div className={`my_card_blue p-3 flex flex-col items-center rounded-xl border border-yellow-dark !w-[100px]`}>
              <div className=' mx-auto'>
                <img src="https://ideabet.org/theme/mcblue/wp-content/uploads/2022/04/menu-hot-ic2.png" alt="" width={45} />
              </div>
              <div>บทความ</div>
            </div>
            <div className={`my_card_blue p-3 flex flex-col items-center rounded-xl border border-yellow-dark !w-[100px]`}>
              <div className=' mx-auto'>
                <img src="https://ideabet.org/theme/mcblue/wp-content/uploads/2021/07/line.png" alt="" width={45} />
              </div>
              <div>ติดต่อเรา</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuModal