import React, {useState, useRef} from 'react';
import Select from 'react-select';

import {useNavigate} from 'react-router-dom';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import './AddProperty.css';

const AddPropertyDetail = () => {
	const navigate = useNavigate();
	const [selectedOption, setSelectedOption] = useState(null);
	const [type, setType] = useState(1);
	const inputRef = useRef(null);

	const [phone, setPhone] = useState('');
	const [value, setValue] = useState('');

	const handleChangePhone = e => {
		let currentValue = e.target.value;
		const isNumber = /^\d+$/.test(currentValue);
		if (isNumber) {
			setValue(currentValue);
		} else {
			setValue('');
		}
	};

	const options = [
		{value: 'option1', label: 'Option 1', description: ''},
		{value: 'option2', label: 'Option 2', description: ''},
		{value: 'option3', label: 'Option 3', description: ''},
		{value: 'option4', label: 'Option 4', description: ''},
		{value: 'option5', label: 'Option 5', description: ''},
		{value: 'option6', label: 'Option 6', description: ''},
		{value: 'option7', label: 'Option 7', description: ''},
		{value: 'option8', label: 'Option 8', description: ''},
	];
	const people = require('../../img/iconpeople1.svg').default;

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
				<>
					<div style={styles.border}>
						<div className='iconAddLegacyManagerFame2_1' />
						<p className='labelformAddLegacyManagerFame3'>เก็บข้อมูลทรัพย์สินเลย</p>
						<button style={styles.buttonStart} onClick={() => navigate('/AddPropertyDetail')}>
							เริ่ม
						</button>
					</div>
				</>
			</div>

			{/* <div className='AddLegacyManagerFame3'>
				<div className=''>
					<div>
						<button className='cancel' onClick={() => navigate('/Home')}>
							ยกเลิก
						</button>
						<button className='save'>บันทึก</button>
					</div>
				</div>
			</div> */}
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
