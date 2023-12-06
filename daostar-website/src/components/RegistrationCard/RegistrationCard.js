import React, { useState } from 'react';
import { Button, Card, Divider, FormGroup, Spinner } from '@blueprintjs/core';
import './RegistrationCard.css';
import { Link } from 'react-router-dom';
import DisplayRegistration from './DisplayRegistration/DisplayRegistration';
import EditRegistration from './EditRegistration/EditRegistration';
import RegistrationReceived from '../Register/RegistrationReceived/RegistrationReceived';
import useAxios from 'axios-hooks';

const RegistrationCard = ({
    id,
    daoURI,
    daoAddress,
    daoDescription,
    daoName,
    governanceURI = '',
    membersURI = '',
    issuersURI = '',
    proposalsURI = '',
    activityLogURI = '',
    registrationNetwork,
    registrationAddress,
    managerAddress,
    standalone = false, // whether this card is presented within the explore view or on its own page
    displayWithoutEdit = false
}) => {

    const [cardScreen, setScreen] = useState('DISPLAY'); // DISPLAY | EDIT | UPDATED
    const onClickEdit = () => setScreen('EDIT');
    const onSetCardScreen = (screen) => setScreen(screen);
    const onCancelEdit = () => setScreen('DISPLAY');
    const [updatedData, setUpdatedData] = useState(null);

    const contractAddress = daoAddress;
    
    const regCard = (
        <Card
            className='wizard-card registration-card'
        >
            {cardScreen === 'DISPLAY' && (
                <DisplayRegistration 
                    id={id}
                    network={registrationNetwork.id}
                    onClickEdit={onClickEdit}
                    daoURI={daoURI}
                    contractAddress={contractAddress}
                    description={daoDescription}
                    name={daoName}
                    managerAddress={managerAddress}
                    standalone={standalone}
                    membersURI={membersURI}
                    issuersURI={issuersURI}
                    activityLogURI={activityLogURI}
                    proposalsURI={proposalsURI}
                    governanceURI={governanceURI}
                    displayWithoutEdit={displayWithoutEdit}
                />
            )}
            {cardScreen === 'EDIT' && (
                <EditRegistration
                    name={daoName}
                    daoURI={daoURI}
                    contractAddress={contractAddress}
                    description={daoDescription}
                    onCancelEdit={onCancelEdit}
                    membersURI={membersURI}
                    issuersURI={issuersURI}
                    activityLogURI={activityLogURI}
                    proposalsURI={proposalsURI}
                    governanceURI={governanceURI}
                    onSetCardScreen={onSetCardScreen}
                    setUpdatedData={setUpdatedData}
                />
            )}
            {cardScreen === 'UPDATED' && (
                <RegistrationReceived 
                    isUpdate
                    daoContractNetwork={registrationNetwork.id}
                    {...updatedData} 
                />
            )}
        </Card>
    )

    if (!standalone) {
        return (
            // <Link to={`/registration/${id}`} className='card-link'>
                regCard
            // </Link>
        )
    }

    return regCard;
}

export default RegistrationCard;