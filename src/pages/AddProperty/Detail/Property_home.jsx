import React, {useState, useRef, useEffect} from 'react';

import {useNavigate} from 'react-router-dom';
import Select from 'react-select';
import ProgressBar from '../../AddDocument/ProgressBar';

//icon
import {IconButton} from '@mui/material';
import {Map, ChevronRight} from '@mui/icons-material';

import 'react-phone-number-input/style.css';

import '../AddProperty.css';

const Property_home = () => {
	const navigate = useNavigate();
	const [images, setImages] = useState(0); // 1 data = true
	const [uploadmore, setUploadMore] = useState(0); //1 data = true

	const upload = [{id: 1}, {id: 2}, {id: 3}];

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

	return (
		<>
			<div className='AddInsurance' style={{padding: windowSize[0] > 1000 ? '15%' : '0%', paddingTop: '10px'}}>
				<div className='AddInsuranceFame1'>
					<p className='HTextAddInsuranceFame1'>Dashboard </p>
					<p className='HTextAddInsuranceFame1_2'>{'>'}</p>
					<p className='HTextAddInsuranceFame1'>ใส่ข้อมูลทรัพย์สิน </p>
					<p className='HTextAddInsuranceFame1_2'>{'>'}</p>
					<p className='HTextAddInsuranceFame1_2'>ทรัพย์สินประเภทบ้านและสิ่งปลูกสร้าง</p>
				</div>

				<div className='AddInsuranceFame2'>
					<p className='HTextAddInsuranceFame2'>เพิ่มข้อมูลทรัพย์สินประเภทบ้านและสิ่งปลูกสร้าง</p>

					<div style={styles.borderTextTitle}>
						<p className='HTextDBFame2'>สินทรัพย์ชิ้นนี้เป็นสินสมรสหรือไม่?</p>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>ชื่อทรัพย์สิน</div>
						<div>
							<input
								style={styles.TextInputs}
								defaultValue={''}
								placeholder={'ชื่อที่ผู้รับมรดกจะเข้าใจได้โดยง่ายและบอกความรู้สึกแทน ใจได้'}
							/>
						</div>
					</div>
					{/* 2 row */}
					<div style={styles.TextTop}>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
							<div style={{display: 'flex', flex: 0.45, flexDirection: 'column'}}>
								<div style={styles.textTitle}>ประเภททรัพย์สิน</div>
								<input style={styles.TextInputs} defaultValue={''} placeholder={''} />
							</div>
							<div style={{display: 'flex', flex: 0.45, flexDirection: 'column'}}>
								<div style={styles.textTitle}>สิทธิในทรัพย์</div>
								<input style={styles.TextInputs} defaultValue={''} placeholder={''} />
							</div>
						</div>
					</div>
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>เลขที่โฉนดที่ดิน</div>
						<div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={'123456'} />
						</div>
					</div>
					{/* 3 row */}
					<div style={styles.TextTop}>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
							<div style={{display: 'flex', flex: 0.3, flexDirection: 'column'}}>
								<div style={styles.textTitle}>ขนาดพื้นที่</div>
								<div style={{flexDirection: 'row', display: 'flex'}}>
									<input style={styles.TextInputs3} defaultValue={''} placeholder={'XXX'} />
									<input disabled style={styles.TextInputs4} defaultValue={''} placeholder={'งาน'} />
								</div>
							</div>
							<div style={{display: 'flex', flex: 0.3, flexDirection: 'column'}}>
								<div style={styles.textTitleFake}>ขนาดพื้นที่</div>
								<div style={{flexDirection: 'row', display: 'flex'}}>
									<input style={styles.TextInputs3} defaultValue={''} placeholder={'XXX'} />
									<input disabled style={styles.TextInputs4} defaultValue={''} placeholder={'ไร่'} />
								</div>
							</div>
							<div style={{display: 'flex', flex: 0.3, flexDirection: 'column'}}>
								<div style={styles.textTitleFake}>ขนาดพื้นที่</div>
								<div style={{flexDirection: 'row', display: 'flex'}}>
									<input style={styles.TextInputs3} defaultValue={''} placeholder={'XXX'} />
									<input disabled style={styles.TextInputs4} defaultValue={''} placeholder={'ตรว.'} />
								</div>
							</div>
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>ระบุรายละเอียด</div>
						<div>
							<textarea
								style={{...styles.TextInputs, resize: 'vertical'}}
								defaultValue={''}
								placeholder={'ภาระผูกพัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุด    ใน กพ. 81'}
							/>
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>มูลค่า</div>
						<div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={'ใส่มูลค่าทรัพย์สินโดยประมาณ'} />
						</div>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>ที่อยู่ของทรัพย์สิน</div>
						<div style={{display: 'flex', border: '1px solid rgba(189, 189, 189, 1)', borderRadius: '4px'}}>
							<div
								style={{
									display: 'flex',
									width: '3%',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<IconButton disabled color='#000'>
									<Map />
								</IconButton>
							</div>
							<input
								className={'input'}
								style={styles.TextInputsMap}
								defaultValue={''}
								placeholder={'ค้นหาที่อยู่ด้วยแผนที่'}
							/>
							<div
								style={{
									display: 'flex',
									width: '3%',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<IconButton color='#000'>
									<ChevronRight />
								</IconButton>
							</div>
						</div>
					</div>
					<div className='formPersonalFame2_4'>
						<label>
							<p className='labelformAddPersonalFame2'>ที่อยู่ปัจจุบันของคุณ (optional)</p>
							<input
								className='inputformAddPersonalFame2_2_1'
								defaultValue={''}
								name='Address1'
								placeholder={'เลขที่'}
							/>
						</label>

						<label>
							<p className='labelformAddInsuranceFame2_1'></p>
							<Select
								className='basic-single'
								classNamePrefix='select'
								defaultValue={''}
								isDisabled={false}
								isLoading={false}
								isClearable={false}
								isRtl={false}
								isSearchable={false}
								name='Address2'
								// options={Province}
								placeholder={'จังหวัด'}
								// ref={selectRef}
								// onChange={e => handleChange(e)}
							/>
						</label>
					</div>

					<div className='formPersonalFame2_1'>
						<label>
							<p className='labelformAddPersonalFame2'></p>
							<Select
								className='basic-single'
								classNamePrefix='select'
								defaultValue={''}
								isDisabled={false}
								isLoading={false}
								isClearable={false}
								isRtl={false}
								isSearchable={false}
								name='Address3'
								placeholder={'เขต/อำเภอ'}
								// options={data}
								// ref={selectRef}
								// onChange={(e) => handleChange(e)}
							/>
						</label>

						<label>
							<p className='labelformAddPersonalFame2'></p>

							<Select
								className='basic-single'
								classNamePrefix='select'
								defaultValue={''}
								isDisabled={false}
								isLoading={false}
								isClearable={false}
								isRtl={false}
								isSearchable={false}
								name='Address4'
								// options={Marital_status}
								placeholder={'แขวง/ตำบล'}
							/>
						</label>
					</div>

					<div className='formPersonalFame2_1'>
						<label>
							<input
								className='inputformAddPersonalFame2_2_1'
								name='PhoneCode'
								placeholder={'รหัสไปรษณีย์'}
								style={{marginRight: 106}}
							/>
						</label>
					</div>
					{/* 1 row */}
					<div style={styles.TextTop}>
						<div style={styles.textTitle}>ระบุรายละเอียด</div>
						<div>
							<textarea
								style={{...styles.TextInputs, resize: 'vertical'}}
								defaultValue={''}
								placeholder={'ภาระผูกพัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุด    ใน กพ. 81'}
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
			<div className='AddInsurance' style={{padding: windowSize[0] > 1000 ? '15%' : '0%', paddingTop: '10px'}}>
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
	TextInputs4: {
		padding: '8px',
		border: '1px solid rgba(189, 189, 189, 1)',
		width: '30%',
		borderRadius: '4px',
	},
	TextInputsMap: {
		padding: '8px',
		border: '1px solid transparent',
		width: '100%',
		borderRadius: '4px',
	},
};

export default Property_home;
