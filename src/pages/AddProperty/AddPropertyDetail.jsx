import React, {useState, useRef} from 'react';

import {useNavigate} from 'react-router-dom';

import 'react-phone-number-input/style.css';
import img1 from '../../img/property/property_home.svg';
import img2 from '../../img/property/property_region.svg';
import img3 from '../../img/property/property_car.svg';
import img4 from '../../img/property/property_bookbank.svg';
import img5 from '../../img/property/property_luxury.svg';
import img6 from '../../img/property/property_art.svg';
import img7 from '../../img/property/property_nft.svg';
import img8 from '../../img/property/property_gold.svg';
import img9 from '../../img/property/property_crypto.svg';
import img10 from '../../img/property/property_graph.svg';
import img11 from '../../img/property/property_document.svg';
import img12 from '../../img/property/property_save.svg';
import img13 from '../../img/property/property_premium.svg';

import './AddProperty.css';

const AddPropertyDetail = () => {
	const navigate = useNavigate();

	const dataProperty = [
		{
			id: 1,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทบ้านและสิ่งปลูกสร้าง',
			name: 'บ้าน/ที่ดิน',
			img: img1,
			des: 'บ้าน/คอนโดมีเนียม/ทาวเฮาส์/บ้านพักตากอากาศ  /อาคารพาณิชย์/ตึกสํานักงาน/โรงงาน',
			navigate: '/Property_home',
		},
		{
			id: 2,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทที่ดิน',
			name: 'ที่ดิน',
			img: img2,
			des: 'โฉนดที่ดิน/นส.3,นส.3ก/สปก.4-01/ภ.บ.ท.5',
		},
		{
			id: 3,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทยานพาหนะ',
			name: 'ยานพาหนะ',
			img: img3,
			des: 'รถยนต์/มอเตอร์ไซค์/เครื่องบิน/เรือ/รถบรรทุก/เครื่องจักรการเกษตร,จักรยาน',
		},
		{
			id: 4,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทบัญชีเงินฝากธนาคาร',
			name: 'บัญชีเงินฝากธนาคาร',
			img: img4,
			des: 'ประเภทบัญชีออมทรัพย์/เงินฝากประจำ/กระแสรายวัน',
		},
		{
			id: 5,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทสินค้า Luxury',
			name: 'สินค้า Luxury',
			img: img5,
			des: 'นาฬิกา/เครื่องเพชร/กระเป๋า/ร้องเท้า/เสื้อ/เฟอร์นิเจอร์/อื่นๆ',
		},
		{
			id: 6,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทงานศิลปะ',
			name: 'งานศิลปะ',
			img: img6,
			des: 'จิตรกรรม/ประติมากรรม/สถาปัตยกรรม/ ภาพพิมพ์/ภาพถ่าย/สื่อผสม/วรรณกรรม/อื่นๆ',
		},
		{
			id: 7,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภท NFT',
			name: 'NFT',
			img: img7,
			des: 'ศิลปะ/แลนด์/เกมส์/เพลง',
		},
		{
			id: 8,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภททอง',
			name: 'ทอง',
			img: img8,
			des: 'ทองแท่ง/ทองรูปพรรณ/แอปออมทอง',
		},
		{
			id: 9,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทคริปโตคอยน์',
			name: 'คริปโตคอยน์',
			img: img9,
			des: 'Exchange/Wallet',
		},
		{
			id: 10,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทหุ้นบริษัท',
			name: 'หุ้นบริษัท',
			img: img10,
			des: 'หุ้นในบริษัทจํากัด/หุ้นในตลาดหลักทรัพย์/หุ้นในกิจการไม่มีทะเบียน เช่น ร้านขายของชํา,อื่นๆ',
		},
		{
			id: 11,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทเจ้าหนี้สัญญา',
			name: 'เจ้าหนี้สัญญา',
			img: img11,
			des: 'เจ้าหนี้สัญญากู้ยืมเงิน/เจ้าหนี้สัญญาเช่า/สิทธิบัตร /ลิขสิทธ์/เจ้าหนี้อื่นๆ',
		},
		{
			id: 12,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทเงินเก็บตู้เซฟ',
			name: 'เงินเก็บตู้เซฟ',
			img: img12,
			des: 'เงินสด/สิ่งของมีค่าที่ทำการเก็บใว้ในเซฟ',
		},
	];

	return (
		<div className='AddInsurance'>
			<div className='AddInsuranceFame1'>
				<p className='HTextAddInsuranceFame1'>Dashboard </p>
				<p className='HTextAddInsuranceFame1_2'>{'>'}</p>
				<p className='HTextAddInsuranceFame1_2'>เพิ่มทรัพย์สิน</p>
			</div>

			<div className='AddInsuranceFame2'>
				<p className='HTextAddInsuranceFame2'>เพิ่มทรัพย์สิน</p>

				<div className='InPersonalFame2'>
					<div className='HAddPersonalFame2'>
						<div className='HtextPersonalFame2'>
							<p className='HTextDBFame2'>กรอกข้อมูลทรัพย์สิน</p>
							<p className='labelformAddLegacyManagerFame2'>
								อย่าปล่อยให้สินทรัพย์ซักชิ้นหายสาบสูญจากความไม่รู้ของคนที่คุณรักเริ่มบันทึกบ้าน,ที่ดิน,รถยนต์,ใบหุ้น
								และทุกสิ่งที่เป็นของคุณ
							</p>
						</div>
						<div className='iconPersonalFame2' />
					</div>
				</div>
				{/*  ======== loop ========*/}
				{dataProperty.map((item, index) => {
					console.log('itemitem >>', index);
					return (
						<>
							<div key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
								<p className='HTextDBFame2'>{item?.title}</p>
							</div>
							<div className='InPersonalFame2'>
								<div className='HAddPersonalFame2'>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											width: '100%',
											flex: 1,
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<div
											style={{
												backgroundImage: `url(${item?.img})`,
												width: '204px',
												height: '205px',
											}}
										/>
										<p className='Title'>กรอกข้อมูลทรัพย์สิน</p>
										<p className='Des'>กรอกข้อมูลทรัพย์สิน</p>
										<button
											style={{
												border: '1px solid rgba(15, 27, 80, 1)',
												borderRadius: 12,
												width: '50%',
												paddingTop: '5px',
												paddingBottom: '5px',
												backgroundColor: 'transparent',
												marginBottom: '10px',
												cursor: 'pointer',
											}}
											onClick={() => navigate(item?.navigate)}
										>
											เพิ่มข้อมูล
										</button>
									</div>
								</div>
							</div>
						</>
					);
				})}
				<div className='InPersonalFame2'>
					<div className='HAddPersonalFame2'>
						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-start',
								// width: '100%',
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
								flexWrap: 'wrap',
							}}
						>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									flexWrap: 'wrap',
								}}
							>
								<div
									style={{
										backgroundImage: `url(${img13})`,
										backgroundSize: 'cover',
										width: '120px',
										height: '120px',
										margin: '10px',
									}}
								/>
								<div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
									<div style={{flexDirection: 'row', display: 'flex'}}>
										<p className='Premium'>คุณสามารถใส่ทรัพย์สินได้</p>
										<p className='PremiumGold'>สูงสุด 10 ชิ้น </p>
									</div>
									<p className='Premium'>หากต้องการบันทึกได้อย่างไม่จํากัด</p>
								</div>
							</div>
							<div style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
								<button
									style={{
										borderRadius: 12,
										width: '70%',
										paddingTop: '5px',
										paddingBottom: '5px',
										backgroundImage: 'linear-gradient(#FBBD00,#FD8F01)',
										marginBottom: '10px',
										border: '0px solid #ffff',
										color: '#fff',
										cursor: 'pointer',
									}}
									onClick={() => {}}
								>
									อัพเกรด Premium
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='AddLegacyManagerFame3'>
				<div className=''>
					<div>
						<button className='cancel' onClick={() => console.log('dataProperty[0].img', dataProperty[0].img)}>
							ยกเลิก
						</button>
						<button className='save'>บันทึก</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = {
	border: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		marginTop: '30px',
	},
	buttonStart: {
		backgroundColor: 'rgba(198, 137, 0, 1)',
		width: '469px',
		border: '0px solid #fff',
		borderRadius: 12,
		height: '52px',
		color: '#fff',
		fontSize: '32px',
	},
};

export default AddPropertyDetail;
