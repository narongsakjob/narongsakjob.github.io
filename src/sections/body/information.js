import React from 'react'
import styled from 'styled-components'

const Information = styled.div`
	margin-top: 20px;
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #ede3e1;
	padding: 20px 0 20px 0;
`
const Profile = ( {t} ) => (
	<div>
		<Information className="hidden-md-down">
			<div className="row"><label className="col-md-5 text-right">{ t('about.first_name.label') } : </label> <div className="col-md-3">{ t('about.first_name.value') } { t('about.last_name.value') }</div></div>
			<div className="row"><label className="col-md-5 text-right">{ t('about.nickname.label') } : </label> <div className="col-md-3">{ t('about.nickname.value') }</div></div>
			<div className="row"><label className="col-md-5 text-right">{ t('about.birthdate.label') } : </label> <div className="col-md-3">{ t('about.birthdate.value') }</div></div>
			<div className="row"><label className="col-md-5 text-right">{ t('about.age.label') } : </label> <div className="col-md-3">{ t('about.age.value') } { t('about.age.unit') }</div></div>
			<div className="row"><label className="col-md-5 text-right">{ t('about.nationality.label') } : </label> <div className="col-md-3">{ t('about.nationality.value') }</div></div>
			<div className="row"><label className="col-md-5 text-right">{ t('about.education.label') } : </label> <div className="col-md-4">{ t('about.education.value') } <label>{ t('about.major.label') }</label></div></div>
			<div className="row"><div className="col-md-5"/><div className="col-md-4">&nbsp;{ t('about.major.value') }</div></div>
		</Information>
		<Information className="hidden-lg-up">
			<div><label>{ t('about.first_name.label') } : </label> { t('about.first_name.value') } { t('about.last_name.value') } </div>
			<div><label>{ t('about.nickname.label') } : </label> { t('about.nickname.value') }</div>
			<div><label>{ t('about.birthdate.label') } : </label> { t('about.birthdate.value') }</div>
			<div><label>{ t('about.age.label') } : </label> { t('about.age.value') } { t('about.age.unit') }</div>
			<div><label>{ t('about.nationality.label') } : </label> { t('about.nationality.value') }</div>
			<div><label>{ t('about.education.label') } : </label> { t('about.education.value') } <label>{ t('about.major.label') }</label> { t('about.major.value') }</div>
		</Information>
	</div>
)

export default Profile