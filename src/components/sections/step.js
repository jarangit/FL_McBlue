import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const StepSection = () => {
  return (
    <div className={`bg-[url('https://ideabet.org/theme/mcblue/wp-content/uploads/2022/08/bg-33.jpg')] bg-cover w-full py-10 relative`}>
      <div className='my_gold_line'/>
      <div className={`flex flex-col gap-3 justify-center items-center text-center w-2/3  mx-auto`}>
        <div>
          <img src={IMAGE_STORE.logo} alt="" width={300} />
        </div>
        <div className={`text-2xl text-yellow font-bold`}>เว็บที่ให้บริการคาสิโนออนไลน์เต็มรูปแบบ ทั้งสล็อตออนไลน์ คาสิโนสด บาคาร่าสด เกมแทงปลา เกมกีฬา ฯลฯ</div>
        <div>โดยผู้เล่นสามารถสนุกกับเกมของเราได้ด้วยเงินเดิมพันขั้นต่ำเพียง 10 บาทเท่านั้น และสามารถทำการ

          ฝาก-ถอนได้ตลอด 24 ชั่วโมง ด้วยระบบออโต้ ทั้งสะดวก รวดเร็วทันใจเป็นอย่างมากเหมาะสำหรับ

          ผู้ที่ชื่นชอบการเดิมพันในรูปแบบของเกมการพนันออนไลน์อันดับ 1 ในปี 2021</div>
        <div>
          <div className='text-3xl font-bold'>ขั้นตอนการสมัคร NameWeb</div>
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6`}>
            <div className='border-2 border-blue-light my_bg_navy flex flex-col gap-3 justify-center text-center items-center  px-1 py-3 rounded-2xl max-w-[300px]'>
              <div>
                <img src={IMAGE_STORE.logo} alt="" width={200} />
              </div>
              <div>
                <img src={IMAGE_STORE.step_icon_item} alt="" width={100} />
              </div>
              <div className='text-xl font-bold'>สมัครง่าย ไม่ยุ่งยาก</div>
              <div className='w-2/3'>หากเกิดปัญหา
                มีทีมงานมืออาชีพ
                พร้อมดูแลคุณตลอด 24 ชั่วโมง</div>
              <div>
                <img src={IMAGE_STORE.step_button} alt="" width={500} />
              </div>
            </div>
            <div className='border-2 border-blue-light my_bg_navy flex flex-col gap-3 justify-center text-center items-center  px-1 py-3 rounded-2xl max-w-[300px]'>
              <div>
                <img src={IMAGE_STORE.logo} alt="" width={200} />
              </div>
              <div>
                <img src={IMAGE_STORE.step_icon_item} alt="" width={100} />
              </div>
              <div className='text-xl font-bold'>สมัครง่าย ไม่ยุ่งยาก</div>
              <div className='w-2/3'>หากเกิดปัญหา
                มีทีมงานมืออาชีพ
                พร้อมดูแลคุณตลอด 24 ชั่วโมง</div>
              <div>
                <img src={IMAGE_STORE.step_button} alt="" width={500} />
              </div>
            </div>
            <div className='border-2 border-blue-light my_bg_navy flex flex-col gap-3 justify-center text-center items-center  px-1 py-3 rounded-2xl max-w-[300px]'>
              <div>
                <img src={IMAGE_STORE.logo} alt="" width={200} />
              </div>
              <div>
                <img src={IMAGE_STORE.step_icon_item} alt="" width={100} />
              </div>
              <div className='text-xl font-bold'>สมัครง่าย ไม่ยุ่งยาก</div>
              <div className='w-2/3'>หากเกิดปัญหา
                มีทีมงานมืออาชีพ
                พร้อมดูแลคุณตลอด 24 ชั่วโมง</div>
              <div>
                <img src={IMAGE_STORE.step_button} alt="" width={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my_gold_line'/>
    </div>
  )
}

export default StepSection