import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const Step2Section = () => {
  return (
    <div className='bg-[url(https://ideabet.org/theme/mcblue/wp-content/uploads/2022/08/Artboard-3.jpg)] bg-cover bg-center bg-no-repeat relative'>
      <div className='my_gold_line' />

      <div className='myContainer'>
        <div className='grid grid-cols-2'>
          <div>
            <div className='border-2 border-blue-light p-3 rounded-2xl flex flex-col gap-3 backdrop-saturate-200 bg-black/70 max-w-[450px] text-sm '>
              <div className={`text-3xl font-bold`}>
                <span className='text-blue-light'>NameWeb </span>
                 คาสิโนที่ใส่ใจคุณ
                สนุกได้ทั้งแนวตั้งและแนวนอน</div>
              <div>
                NameWeb  ใส่ใจทุกรายละเอียด ไม่ว่าคุณจะเล่นผ่านเว็บไซต์ หรือ แอพในมือถือ ต่างได้ประสบการณ์สุดพิเศษ ที่ใช้งานง่าย เสถียร์ ให้คุณมีเวลา และ ทำกำไรปราศจากความกังวลท่ามกลางเว็บ NameWeb Casino มากมายเล่นทั้งที ต้องเล่นเว็บตรง</div>
              <div className='flex gap-2 flex-col '>
                <div>{'> เว็บตรงไม่โอนย้าย สมัครภายใน 1 นาที คุย/ไม่คุย ก็เล่นได้ชิลๆ '}</div>
                <div>{'> การเงินมั่นคงฝากถอน ถอนสูงสุดบัญชีละ 2ล้าน ต่อวัน '}</div>
                <div>{'> ผู้นำตัวจริง ระบบออโต้ ฝาก–ถอน การันตีเวลา'}</div>
                <div>{'> ทีมงานมืออาชีพ พร้อมดูแลคุณตลอด 24 ชั่วโมง'}</div>
              </div>
              <div className='flex gap-3 items-center justify-center'>
                <div>
                  <img src={IMAGE_STORE.step2_item} alt="" width={100} />
                </div>
                <div>
                  <img src={IMAGE_STORE.step2_item} alt="" width={100} />
                </div>
                <div>
                  <img src={IMAGE_STORE.step2_item} alt="" width={100} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={IMAGE_STORE.step_casino} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2Section