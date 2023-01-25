import React, {useState, useRef} from 'react';

import {useNavigate} from 'react-router-dom';
import Select from 'react-select';
import ProgressBar from '../../AddDocument/ProgressBar';

//icon
import {IconButton} from '@mui/material';
import {Map, ChevronRight} from '@mui/icons-material';

import 'react-phone-number-input/style.css';

import '../AddProperty.css';

const Property_art = () => {
	const navigate = useNavigate();
	const [images, setImages] = useState(0); // 1 data = true
	const [uploadmore, setUploadMore] = useState(0); //1 data = true

	const upload = [{id: 1}, {id: 2}, {id: 3}];

	return (
		<>
			<div className='AddInsurance'>
				<div className='AddInsuranceFame1'>
					<p className='HTextAddInsuranceFame1'>Dashboard </p>
					<p className='HTextAddInsuranceFame1_2'>{'>'}</p>
					<p className='HTextAddInsuranceFame1'>ใส่ข้อมูลทรัพย์สิน </p>
					<p className='HTextAddInsuranceFame1_2'>{'>'}</p>
					<p className='HTextAddInsuranceFame1_2'>ทรัพย์สินประเภทงานศิลปะ</p>
				</div>

				<div className='AddInsuranceFame2'>
					<p className='HTextAddInsuranceFame26'>เพิ่มข้อมูลทรัพย์สินประเภทงานศิลปะ</p>

					<div style={styles.borderTextTitle}>
						<p className='HTextDBFame2'>สินทรัพย์ชิ้นนี้เป็นสินสมรสหรือไม่?</p>
					</div>
					{/* 2 row */}
					<div style={styles.TextTop}>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
							<div style={{display: 'flex', flex: 0.45, flexDirection: 'column'}}>
								<div style={styles.textTitle}>ชื่อผลงาน</div>
								<input style={styles.TextInputs} defaultValue={''} placeholder={'ชื่อผลงานที่คุณครอบครอง'} />
							</div>
							<div style={{display: 'flex', flex: 0.45, flexDirection: 'column'}}>
								<div style={styles.textTitle}>ประเภททรัพย์สิน</div>
								<input style={styles.TextInputs} defaultValue={''} placeholder={'จิตรกรรม'} />
							</div>
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>ผู้สร้างสรรค์</div>
						<div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={'ชื่อศิลปินผู้สร้างผลงาน'} />
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>เลขทะเบียนงานศิลปะ(optional)</div>
						<div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={'ใส่เลขทะเบียนสินค้า'} />
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>มูลค่างานศิลปะโดยประมาณ</div>
						<div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={'ใส่มูลค่างานศิลปะโดยประมาณ'} />
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>สถานที่เก็บทรัพย์</div>
						<div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={'ระบุสถานที่เก็บงานศิลปะ'} />
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>คำอธิบายเพิ่มเติม(optional)</div>
						<div>
							<textarea
								style={{...styles.TextInputs, resize: 'vertical'}}
								defaultValue={''}
								placeholder={'บอกลักษณะทรัพย์สินข้อพึงระวังหรือระบุความห่วงใย ที่คุณอยากบอกกับผู้รับมรดกชิ้นนี้'}
							/>
						</div>
					</div>

					<div className='formAddInsuranceFame2_3'>
						<div className='imgupload' />
						<p className='HTextDBFame2'>วางรูปภาพที่นี้</p>
						<p className='labelformAddInsuranceFame3'>File support JPG,PNG</p>
						<div>
							<label htmlFor='file-input' className='custom-file-label'>
								อัพโหลดภาพ
							</label>

							<input type='file' multiple id='file-input' style={{display: 'none'}} />
						</div>
					</div>
					{!images ? (
						<div
							style={{
								display: 'flex',
								width: '100%',
								justifyContent: 'center',
								alignItems: 'center',
								paddingTop: '5%',
							}}
						>
							<div style={{color: 'rgba(189, 189, 189, 1)'}}>ยังไม่มีไฟล์ภาพในการอัพโหลด</div>
						</div>
					) : (
						<>
							<div
								style={{
									display: 'flex',
									width: '100%',
									paddingTop: '3%',
									flexDirection: 'column',
									justifyContent: 'flex-start',
									alignItems: 'flex-start',
								}}
							>
								<div style={{color: 'rgba(189, 189, 189, 1)'}}>อัพโหลดได้สูงสุด 4 ภาพ</div>
							</div>
							{upload.map((index, item) => {
								return (
									<>
										<div style={{display: 'flex', width: '100%', marginTop: '3%'}}>
											<div
												style={{
													display: 'flex',
													flexDirection: 'row',
													width: '100%',
													flexWrap: 'wrap',
													justifyContent: 'center',
												}}
											>
												<div className='imgfile' />
												<div
													style={{
														display: 'flex',
														flexDirection: 'column',
														marginLeft: '10px',
														marginTop: '5px',
														flex: 1,
													}}
												>
													<div
														style={{
															display: 'flex',
															justifyContent: 'space-between',
															flexDirection: 'row',
															flexWrap: 'wrap',
														}}
													>
														<div style={{display: 'flex', flex: 1}}>
															<p className='TextUpload1'>picture name1.jpg</p>
														</div>
														<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
															<div style={{marginRight: '10px'}}>
																<p className='TextUpload3'>อัพโหลดใหม่</p>
															</div>
															<div>
																<p className='TextUpload3'>ลบออก</p>
															</div>
														</div>
													</div>
													<p className='TextUpload2'>อัพโหลดสำเร็จแล้ว</p>
													<ProgressBar upload={'upload'} progress={0} />
												</div>
											</div>
										</div>
										<div
											style={{
												width: '100%',
												height: '1px',
												backgroundColor: 'rgba(235, 235, 235, 1)',
												display: 'flex',
												marginTop: '15px',
												marginBottom: '15px',
											}}
										/>
									</>
								);
							})}
						</>
					)}
				</div>
			</div>
			<div className='AddInsurance'>
				<div className='AddInsuranceFame2'>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
						<div className='imgfile' />
						<div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
							<p className='uploadText'>อัพโหลดเอกสารเพิ่มเติม</p>
							<p className='uploadText2'>จำนวนเอกสาร 3 ไฟล์</p>
						</div>
					</div>
					<div
						style={{
							width: '100%',
							height: '1px',
							backgroundColor: '#828282',
							display: 'flex',
							marginTop: '15px',
							marginBottom: '15px',
						}}
					/>
					{!uploadmore ? (
						<div
							style={{
								backgroundColor: 'rgba(246, 246, 246, 1)',
								width: '100%',
								height: 'auto',
								flexDirection: 'column',
								display: 'flex',
								paddingTop: '15px',
								paddingBottom: '15px',
								marginBottom: '20px',
							}}
						>
							<div style={{color: 'rgba(130, 130, 130, 1)', fontFamily: 'Kanit', fontSize: '16px'}}>
								เอกสารหลักฐานที่แสดงถึงความเป็นเจ้าของทรัพย์สิน เช่น โฉนดที่ดิน, เอกสารสิทธิ์ห้องชุด
							</div>
							<div style={{color: 'rgba(130, 130, 130, 1)', fontFamily: 'Kanit', fontSize: '16px'}}>
								(เป็นไฟล์ PDF หรือ JPG ขนาดไม่เกิน 1 mb)
							</div>
						</div>
					) : (
						<>
							<div
								style={{flex: 1, display: 'flex', flexWrap: 'wrap', flexBasis: '100%', justifyContent: 'flex-start'}}
							>
								{upload.map((index, item) => {
									return (
										<>
											<div
												key={index}
												style={{
													height: 'auto',
													flexDirection: 'column',
													display: 'flex',
													paddingTop: '15px',
													paddingBottom: '15px',
													marginBottom: '20px',
													flexBasis: '50%',
												}}
											>
												<div
													style={{
														backgroundColor: 'rgba(246, 246, 246, 1)',
														margin: '10px',
														display: 'flex',
														flexDirection: 'row',
														alignItems: 'center',
														borderRadius: '12px',
														padding: '5px',
													}}
												>
													<div className='imgfile' />
													<div
														style={{
															display: 'flex',
															flexDirection: 'column',
															marginLeft: '10px',
															marginTop: '5px',
															flex: 1,
														}}
													>
														<div
															style={{
																display: 'flex',
																justifyContent: 'space-between',
																flexDirection: 'row',
																flexWrap: 'wrap',
															}}
														>
															<div style={{display: 'flex', flex: 1}}>
																<p className='TextUpload1'>Filename1.PDF</p>
															</div>
														</div>
														<p className='TextUpload4'>128kb</p>
													</div>
													<div
														style={{
															display: 'flex',
															flexDirection: 'row',
															flexWrap: 'wrap',
															justifyContent: 'center',
															marginRight: '10px',
														}}
													>
														<div>
															<p className='TextUpload5'>ลบออก</p>
														</div>
													</div>
												</div>
											</div>
										</>
									);
								})}
							</div>
						</>
					)}
					<button
						style={{
							border: '1px solid rgba(15, 27, 80, 1)',
							borderRadius: 12,
							width: '100%',
							paddingTop: '5px',
							paddingBottom: '5px',
							backgroundColor: 'transparent',
							marginBottom: '10px',
							cursor: 'pointer',
							fontWeight: 600,
							color: 'rgba(15, 27, 80, 1)',
						}}
					>
						อัพโหลดเอกสาร
					</button>
				</div>

				<div className='AddLegacyManagerFame3'>
					<div className=''>
						<div>
							<button className='cancel' onClick={() => navigate('/Home')}>
								ยกเลิก
							</button>
							<button className='save'>บันทึก</button>
						</div>
					</div>
				</div>
			</div>
		</>
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
	textTitle: {
		fontSize: '14px',
		fontFamily: 'Kanit',
		color: 'rgba(130, 130, 130, 1)',
		alignSelf: 'flex-start',
	},
	textTitleFake: {
		fontSize: '14px',
		fontFamily: 'Kanit',
		color: 'transparent',
		alignSelf: 'flex-start',
	},
	borderTextTitle: {
		display: 'flex',
		justifyContent: 'flex-start',
		width: '100%',
	},
	TextTop: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		marginTop: '10px',
	},
	TextInputs: {
		padding: '8px',
		border: '1px solid rgba(189, 189, 189, 1)',
		width: '100%',
		borderRadius: '4px',
	},
	TextInputs3: {
		padding: '8px',
		border: '1px solid rgba(189, 189, 189, 1)',
		width: '70%',
		borderRadius: '4px',
	},
	TextInputsCar: {
		padding: '8px',
		border: '1px solid rgba(189, 189, 189, 1)',
		// width: '90%',
		flex: 1,
		borderRadius: '4px',
	},
	TextInputsRow: {
		padding: '8px',
		border: '1px solid rgba(189, 189, 189, 1)',
		// width: '100%',
		flex: 1,
		borderRadius: '4px',
	},
	TextInputs4: {
		padding: '8px',
		border: '1px solid rgba(189, 189, 189, 1)',
		width: '30%',
		borderRadius: '4px',
	},
	TextInputsMap: {
		// padding: '8px',
		border: '1px solid transparent',
		flex: 2,
		borderRadius: '4px',
	},
};

export default Property_art;
