import React, {useState, useRef, useEffect} from 'react';

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
	const [getDataWithAPI] = useState('');

	const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});

	const dataProperty = [
		{
			id: 1,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทบ้านและสิ่งปลูกสร้าง',
			name: 'บ้าน/ที่ดิน',
			img: img1,
			des: 'บ้าน/คอนโดมีเนียม/ทาวเฮาส์/บ้านพักตากอากาศ  /อาคารพาณิชย์/ตึกสํานักงาน/โรงงาน',
			navigate: '/Property_home',
			data: [
				{
					name: 'บ้านพระนครริมน้ำ',
					des_name: 'บ้านพักตากอากาศ',
					ownershipTitle: 'สิทธิ์ในทรัพย์',
					ownership: 'เจ้าของ 100%',
					sizeTitle: 'ขนาดพื้นที่',
					size: '120 ตรม.',
					detailTitle: 'รายละเอียด',
					detail: 'ถาระติดผัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุดใน กพ. 81',
					valueTitle: 'มูลค่า',
					value: '7.5 ล้านบาท',
					addressTitle: 'ที่อยู่',
					address: '107/42 แขวงบางจาก เขตพระโขนง จังหวัดกรุงเทพฯ 10260',
					other_detailTitle: 'คำอธิบายเพิ่มเติม',
					other_detail: 'บ้านริมน้ำอายุ 100 ปี สภาพมีผุพังพอประมาณ',
					documentTitle: 'เอกสาร',
					document: 'File name.pdf',
					img: {
						img1:
							'https://st.hzcdn.com/simgs/pictures/exteriors/denver-modern-home-materials-marketing-img~a07116690c6c2c62_9-6685-1-6fe352d.jpg',
						img2:
							'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2021/11/House-with-3-storey-is-match-to-you.jpg',
						img3: 'https://www.dazzlingbuildings.com/wp-content/uploads/2020/08/gallery-img-D1-132.5-sqm.jpg',
					},
				},
				{
					name: 'บ้านพระนครริมน้ำ',
					des_name: 'บ้านพักตากอากาศ',
					ownershipTitle: 'สิทธิ์ในทรัพย์',
					ownership: 'เจ้าของ 100%',
					sizeTitle: 'ขนาดพื้นที่',
					size: '120 ตรม.',
					detailTitle: 'รายละเอียด',
					detail: 'ถาระติดผัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุดใน กพ. 81',
					valueTitle: 'มูลค่า',
					value: '7.5 ล้านบาท',
					addressTitle: 'ที่อยู่',
					address: '107/42 แขวงบางจาก เขตพระโขนง จังหวัดกรุงเทพฯ 10260',
					other_detailTitle: 'คำอธิบายเพิ่มเติม',
					other_detail: 'บ้านริมน้ำอายุ 100 ปี สภาพมีผุพังพอประมาณ',
					documentTitle: 'เอกสาร',
					document: 'File name.pdf',
					img: {
						img1:
							'https://st.hzcdn.com/simgs/pictures/exteriors/denver-modern-home-materials-marketing-img~a07116690c6c2c62_9-6685-1-6fe352d.jpg',
						img2:
							'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2021/11/House-with-3-storey-is-match-to-you.jpg',
						img3: 'https://www.dazzlingbuildings.com/wp-content/uploads/2020/08/gallery-img-D1-132.5-sqm.jpg',
					},
				},
				{
					name: 'บ้านพระนครริมน้ำ',
					des_name: 'บ้านพักตากอากาศ',
					ownershipTitle: 'สิทธิ์ในทรัพย์',
					ownership: 'เจ้าของ 100%',
					sizeTitle: 'ขนาดพื้นที่',
					size: '120 ตรม.',
					detailTitle: 'รายละเอียด',
					detail: 'ถาระติดผัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุดใน กพ. 81',
					valueTitle: 'มูลค่า',
					value: '7.5 ล้านบาท',
					addressTitle: 'ที่อยู่',
					address: '107/42 แขวงบางจาก เขตพระโขนง จังหวัดกรุงเทพฯ 10260',
					other_detailTitle: 'คำอธิบายเพิ่มเติม',
					other_detail: 'บ้านริมน้ำอายุ 100 ปี สภาพมีผุพังพอประมาณ',
					documentTitle: 'เอกสาร',
					document: 'File name.pdf',
					img: {
						img1:
							'https://st.hzcdn.com/simgs/pictures/exteriors/denver-modern-home-materials-marketing-img~a07116690c6c2c62_9-6685-1-6fe352d.jpg',
						img2:
							'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2021/11/House-with-3-storey-is-match-to-you.jpg',
						img3: 'https://www.dazzlingbuildings.com/wp-content/uploads/2020/08/gallery-img-D1-132.5-sqm.jpg',
					},
				},
				{
					name: 'บ้านพระนครริมน้ำ',
					des_name: 'บ้านพักตากอากาศ',
					ownershipTitle: 'สิทธิ์ในทรัพย์',
					ownership: 'เจ้าของ 100%',
					sizeTitle: 'ขนาดพื้นที่',
					size: '120 ตรม.',
					detailTitle: 'รายละเอียด',
					detail: 'ถาระติดผัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุดใน กพ. 81',
					valueTitle: 'มูลค่า',
					value: '7.5 ล้านบาท',
					addressTitle: 'ที่อยู่',
					address: '107/42 แขวงบางจาก เขตพระโขนง จังหวัดกรุงเทพฯ 10260',
					other_detailTitle: 'คำอธิบายเพิ่มเติม',
					other_detail: 'บ้านริมน้ำอายุ 100 ปี สภาพมีผุพังพอประมาณ',
					documentTitle: 'เอกสาร',
					document: 'File name.pdf',
					img: {
						img1:
							'https://st.hzcdn.com/simgs/pictures/exteriors/denver-modern-home-materials-marketing-img~a07116690c6c2c62_9-6685-1-6fe352d.jpg',
						img2:
							'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2021/11/House-with-3-storey-is-match-to-you.jpg',
						img3: 'https://www.dazzlingbuildings.com/wp-content/uploads/2020/08/gallery-img-D1-132.5-sqm.jpg',
					},
				},
			],
		},
		{
			id: 2,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทที่ดิน',
			name: 'ที่ดิน',
			img: img2,
			des: 'โฉนดที่ดิน/นส.3,นส.3ก/สปก.4-01/ภ.บ.ท.5',
			navigate: '/Property_region',
			data: getDataWithAPI,
		},
		{
			id: 3,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทยานพาหนะ',
			name: 'ยานพาหนะ',
			img: img3,
			des: 'รถยนต์/มอเตอร์ไซค์/เครื่องบิน/เรือ/รถบรรทุก/เครื่องจักรการเกษตร,จักรยาน',
			navigate: '/Property_car',
		},
		{
			id: 4,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทบัญชีเงินฝากธนาคาร',
			name: 'บัญชีเงินฝากธนาคาร',
			img: img4,
			des: 'ประเภทบัญชีออมทรัพย์/เงินฝากประจำ/กระแสรายวัน',
			navigate: '/Property_bookbank',
		},
		{
			id: 5,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทสินค้า Luxury',
			name: 'สินค้า Luxury',
			img: img5,
			des: 'นาฬิกา/เครื่องเพชร/กระเป๋า/ร้องเท้า/เสื้อ/เฟอร์นิเจอร์/อื่นๆ',
			navigate: '/Property_luxury',
		},
		{
			id: 6,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทงานศิลปะ',
			name: 'งานศิลปะ',
			img: img6,
			des: 'จิตรกรรม/ประติมากรรม/สถาปัตยกรรม/ ภาพพิมพ์/ภาพถ่าย/สื่อผสม/วรรณกรรม/อื่นๆ',
			navigate: '/Property_art',
		},
		{
			id: 7,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภท NFT',
			name: 'NFT',
			img: img7,
			des: 'ศิลปะ/แลนด์/เกมส์/เพลง',
			navigate: '/Property_nft',
		},
		{
			id: 8,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภททอง',
			name: 'ทอง',
			img: img8,
			des: 'ทองแท่ง/ทองรูปพรรณ/แอปออมทอง',
			navigate: '/Property_gold',
		},
		{
			id: 9,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทคริปโตคอยน์',
			name: 'คริปโตคอยน์',
			img: img9,
			des: 'Exchange/Wallet',
			navigate: '/Property_crypto',
		},
		{
			id: 10,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทหุ้นบริษัท',
			name: 'หุ้นบริษัท',
			img: img10,
			des: 'หุ้นในบริษัทจํากัด/หุ้นในตลาดหลักทรัพย์/หุ้นในกิจการไม่มีทะเบียน เช่น ร้านขายของชํา,อื่นๆ',
			navigate: '/Property_graph',
		},
		{
			id: 11,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทเจ้าหนี้สัญญา',
			name: 'เจ้าหนี้สัญญา',
			img: img11,
			des: 'เจ้าหนี้สัญญากู้ยืมเงิน/เจ้าหนี้สัญญาเช่า/สิทธิบัตร /ลิขสิทธ์/เจ้าหนี้อื่นๆ',
			navigate: '/Property_document',
		},
		{
			id: 12,
			title: 'เพิ่มข้อมูลทรัพย์สินประเภทเงินเก็บตู้เซฟ',
			name: 'เงินเก็บตู้เซฟ',
			img: img12,
			des: 'เงินสด/สิ่งของมีค่าที่ทำการเก็บใว้ในเซฟ',
			navigate: '/Property_save',
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
					return (
						<>
							<div key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
								<p className='HTextDBFame2'>{item?.title} </p>
							</div>
							<div
								// className='InPersonalFame2'
								style={{
									display: 'flex',
									flexDirection: 'row',
									flexWrap: windowSize[0] < 1000 ? 'nowrap' : 'wrap',
									justifyContent: windowSize[0] < 1000 ? 'center' : 'flex-start',
									overflowY: windowSize[0] < 1000 && item?.data ? 'scroll' : 'visible',
								}}
							>
								{item?.data ? (
									<>
										{item.data.map((row, indexs) => {
											console.log('{item.data[index].name}', row);
											return (
												<div
													key={indexs}
													style={{
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
													}}
												>
													<div style={styles.divMapTop}>
														{windowSize[0] < 1000 ? (
															//  ================== MOBILE ==================
															<div style={styles.containerMobile}>
																<div
																	style={{
																		display: 'flex',
																		width: windowSize[0] > 1000 ? window.innerWidth / 4.51 : '100%',
																		flexWrap: 'wrap',
																		position: 'relative',
																		justifyContent: 'center',
																		alignItems: 'center',
																		marginBottom: windowSize[0] > 1000 ? '40px' : '20px',
																		marginTop: '20px',
																	}}
																>
																	<div className='InPersonalFame777' style={styles.topFrame}>
																		<div style={{height: 'auto', display: 'flex', width: '100%'}}>
																			<div
																				style={{
																					display: 'flex',
																					flexDirection: 'row',
																					justifyContent: 'flex-start',
																					alignItems: 'center',
																				}}
																			>
																				<div style={{width: '100px', height: '100px'}}>
																					<div
																						style={{
																							backgroundImage: `url(${item?.img})`,
																							width: '100%',
																							height: '100%',
																							backgroundSize: 'cover',
																						}}
																					/>
																				</div>
																				<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
																					<div>{row.name}</div>
																					<div style={styles.titleT}>{row.des_name}</div>
																				</div>
																			</div>
																		</div>
																		<div
																			style={{
																				display: 'flex',
																				flexDirection: 'column',
																				flex: 1,
																				marginLeft: '10px',
																				marginRight: '10px',
																			}}
																		>
																			{/* row 2 */}
																			<div style={styles.divTopRow}>
																				<div style={styles.flex05}>
																					<div style={styles.titleT}>{row.ownershipTitle}</div>
																					<div style={styles.titleB}>{row.ownership}</div>
																				</div>
																				<div style={styles.flex05}>
																					<div style={styles.titleT}>{row.sizeTitle}</div>
																					<div style={styles.titleB}>{row.size}</div>
																				</div>
																			</div>
																			{/* row full */}
																			<div style={styles.divTopRow}>
																				<div style={styles.flex10}>
																					<div style={styles.titleT}>{row.detailTitle}</div>
																					<div style={styles.titleB}>{row.detail}</div>
																				</div>
																			</div>
																			{/* row full */}
																			<div style={styles.divTopRow}>
																				<div style={styles.flex10}>
																					<div style={styles.titleT}>{row.valueTitle}</div>
																					<div style={styles.titleB}>{row.value}</div>
																				</div>
																			</div>
																			{/* row 1 */}
																			<div style={styles.divTopRow}>
																				<div style={styles.flex10}>
																					<div style={styles.titleT}>{row.addressTitle}</div>
																					<div style={styles.titleB}>{row.address}</div>
																				</div>
																			</div>
																			{/* row full */}
																			<div style={styles.divTopRow}>
																				<div style={styles.flex10}>
																					<div style={styles.titleT}>{row.other_detailTitle}</div>
																					<div style={styles.titleB}>{row.other_detail}</div>
																				</div>
																			</div>
																			{/* row full */}
																			<div style={styles.divTopRow}>
																				<div style={styles.flex10}>
																					<div style={styles.titleT}>{row.documentTitle}</div>
																					<div style={styles.titleB}>{row.document}</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														) : (
															//  ================== DESKTOP ==================
															<div
																style={{
																	display: 'flex',
																	width: windowSize[0] > 1000 ? window.innerWidth / 4.51 : '100%',
																	flexWrap: 'wrap',
																	position: 'relative',
																	justifyContent: 'center',
																	alignItems: 'center',
																	marginBottom: '40px',
																}}
															>
																<div
																	className='InPersonalFame777'
																	style={{
																		width: '90%',
																		height: '100%',
																		display: 'flex',
																		flexDirection: 'column',
																	}}
																>
																	<div style={{height: 'auto', display: 'flex', width: '100%'}}>
																		<div
																			style={{
																				display: 'flex',
																				flexDirection: 'row',
																				justifyContent: 'flex-start',
																				alignItems: 'center',
																			}}
																		>
																			<div style={{width: '100px', height: '100px'}}>
																				<div
																					style={{
																						backgroundImage: `url(${item?.img})`,
																						width: '100%',
																						height: '100%',
																						backgroundSize: 'cover',
																					}}
																				/>
																			</div>
																			<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
																				<div>{row.name}</div>
																				<div style={styles.titleT}>{row.des_name}</div>
																			</div>
																		</div>
																	</div>
																	<div
																		style={{
																			display: 'flex',
																			flexDirection: 'column',
																			flex: 1,
																			marginLeft: '10px',
																			marginRight: '10px',
																		}}
																	>
																		{/* row 2 */}
																		<div style={styles.divFull}>
																			<div style={styles.flex05}>
																				<div style={styles.titleT}>{row.ownershipTitle}</div>
																				<div style={styles.titleB}>{row.ownership}</div>
																			</div>
																			<div style={styles.flex05}>
																				<div style={styles.titleT}>{row.sizeTitle}</div>
																				<div style={styles.titleB}>{row.size}</div>
																			</div>
																		</div>
																		{/* row full */}
																		<div style={styles.divFull}>
																			<div style={styles.flex10}>
																				<div style={styles.titleT}>{row.detailTitle}</div>
																				<div style={styles.titleB}>{row.detail}</div>
																			</div>
																		</div>
																		{/* row full */}
																		<div style={styles.divFull}>
																			<div style={styles.flex10}>
																				<div style={styles.titleT}>{row.valueTitle}</div>
																				<div style={styles.titleB}>{row.value}</div>
																			</div>
																		</div>
																		{/* row 1 */}
																		<div style={styles.divFull}>
																			<div style={styles.flex10}>
																				<div style={styles.titleT}>{row.addressTitle}</div>
																				<div style={styles.titleB}>{row.address}</div>
																			</div>
																		</div>
																		{/* row full */}
																		<div style={styles.divFull}>
																			<div style={styles.flex10}>
																				<div style={styles.titleT}>{row.other_detailTitle}</div>
																				<div style={styles.titleB}>{row.other_detail}</div>
																			</div>
																		</div>
																		{/* row full */}
																		<div style={styles.divFull}>
																			<div style={styles.flex10}>
																				<div style={styles.titleT}>{row.documentTitle}</div>
																				<div style={styles.titleB}>{row.document}</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														)}
													</div>
												</div>
											);
										})}
									</>
								) : (
									<div style={{width: '100%'}}>
										<div className='HAddPersonalFame2'>
											<div style={styles.divAddData}>
												<div
													style={{
														backgroundImage: `url(${item?.img})`,
														width: '204px',
														height: '205px',
													}}
												/>
												<p className='Title'>{item?.name}</p>
												<p className='Des'>{item?.des}</p>
												<button style={styles.AddData} onClick={() => navigate(item?.navigate)}>
													เพิ่มข้อมูล
												</button>
											</div>
										</div>
									</div>
								)}
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
								<button style={styles.buttonPremium} onClick={() => {}}>
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
	titleT: {
		fontFamily: 'Kanit',
		fontSize: '12px',
		color: 'rgba(91, 91, 91, 1)',
	},
	titleB: {
		fontFamily: 'Kanit',
		fontSize: '18px',
		fontWeight: '400',
		color: 'rgba(47, 47, 47, 1)',
	},
	divMapTop: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-end',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	topFrame: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	containerMobile: {
		display: 'flex',
		flexDirection: 'row',
		width: window.innerWidth / 2,
		height: 'auto',
		overflowY: 'scroll',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	divTopRow: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		marginTop: '10px',
	},
	flex05: {
		display: 'flex',
		flex: 0.5,
		flexDirection: 'column',
	},
	flex10: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
	},
	AddData: {
		border: '1px solid rgba(15, 27, 80, 1)',
		borderRadius: 12,
		width: '50%',
		paddingTop: '5px',
		paddingBottom: '5px',
		backgroundColor: 'transparent',
		marginBottom: '10px',
		cursor: 'pointer',
	},
	buttonPremium: {
		borderRadius: 12,
		width: '70%',
		paddingTop: '5px',
		paddingBottom: '5px',
		backgroundImage: 'linear-gradient(#FBBD00,#FD8F01)',
		marginBottom: '10px',
		border: '0px solid #ffff',
		color: '#fff',
		cursor: 'pointer',
	},
	divAddData: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	divFull: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		marginTop: '10px',
	},
};

export default AddPropertyDetail;
