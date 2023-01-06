import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const WhySection = () => {
  const styled = {
    item: `flex gap-3 items-center`
  }
  return (
    <div className='bg-[url(/public/img/bg_why.jpeg)] relative  bg-cover bg-center bg-no-repeat'>
      <div className='my_gold_line' />
      <div className='myContainer'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
          <div>
            <img src={IMAGE_STORE.why_col} alt="" />
          </div>
          <div>
            <div className='text-xl'>ทำไมต้อง NameWeb</div>
            <div className='flex flex-col gap-3 my-6'>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div>ระบบอัตโนมัติ ฝากถอนรวดเร็ว เพียงไม่กี่วินาที</div>
              </div>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div>มีตัวตนจริง สถานที่ตั้งจริง ในคาสิโนต่างประเทศ</div>
              </div>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div>เว็บเดียวจบครบทุกการเดิมพัน ไม่ว่าจะเป็น บาคาร่า สล็อต กีฬา เกม</div>
              </div>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div> เปิดให้บริการมาไม่ต่ำกว่า 5 ปี</div>
              </div>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div>ฐานข้อมูลตั้งอยู่ในต่างประเทศ ปลอดภัย 100%</div>
              </div>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div> เล่นได้ ถอนเงินได้จริง สูงสุด 1,000,000 ต่อวัน</div>
              </div>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div> คาสิโนสด ส่งตรงจากคาสิโน ไม่มีการตัดต่อ</div>
              </div>
              <div className={`${styled.item}`}>
                <div>
                  <img src={IMAGE_STORE.finger} alt="" width={20} />
                </div>
                <div> ไม่มีขั้นต่ำ</div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          เว็บอันดับหนึ่ง NameWeb ที่รวมสาวสวยมากมายให้ท่านได้ตื่นตาตื่นใจ บาคาร่าออนไลน์ที่ เย้ายวนใจที่สุดในตอนนี้ หรือ ที่รู้จักกันว่า

          Sexy Baccarat, Sexy Gaming, เอ็มจีเอ็มห้าจี เซ็กซี่ หรือ เซ็กซี่เกมส์ เอ็มจีเอ็มห้าจี
        </div>
      </div>
    </div>
  )
}

export default WhySection