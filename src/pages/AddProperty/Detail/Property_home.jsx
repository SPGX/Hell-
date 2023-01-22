import React, {useState, useRef} from 'react';

import {useNavigate} from 'react-router-dom';

import 'react-phone-number-input/style.css';

import '../AddProperty.css';

const Property_home = () => {
	const navigate = useNavigate();

	return (
		<div className='AddInsurance'>
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
							<input style={styles.TextInputs} defaultValue={''} placeholder={''} />
						</div>
						<div style={{ display: 'flex', flex: 0.3, flexDirection: 'column' }}>
							<div style={styles.textTitleFake}>ขนาดพื้นที่</div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={''} />
						</div>
						<div style={{ display: 'flex', flex: 0.3, flexDirection: 'column' }}>
							<div style={styles.textTitleFake}>ขนาดพื้นที่</div>
							<input style={styles.TextInputs} defaultValue={''} placeholder={''} />
						</div>
					</div>
				</div>
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
		border: '1px soild rgba(189, 189, 189, 1)',
		width: '100%',
		borderRadius: '10px',
	},
};

export default Property_home;
