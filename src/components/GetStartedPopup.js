

import React, { useEffect, useState } from 'react';
import { Modal, ModalFooter } from '@windmill/react-ui';
import ztellerImage from '../assets/img/zteller.png';
import MultiForm from './MultiFormPopup'; // Import your MultiForm component

const GetStartedPopup = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showMultiForm, setShowMultiForm] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const totalStages = 3; // Assume you have 3 stages in your MultiForm

  const handleClick = () => {
    setShowMultiForm(true);
  };

  const handleStageCompletion = () => {
    if (currentStage < totalStages) {
      setCurrentStage(currentStage + 1);
    } else {
      handleCloseMultiForm();
    }
  };

  const handleCloseMultiForm = () => {
    setShowMultiForm(false);
    setIsOpen(false);
    onComplete(); // Notify the dashboard that the modal is closed
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isOpen) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen && !showMultiForm} onClose={() => {}}>
        <div className="p-8 text-center">
          <img
            src={ztellerImage}
            alt="Zteller"
            className="mx-auto mb-4 w-32 h-32"
          />
          <h2 className="text-2xl font-bold mb-2">Welcome to Zteller</h2>
          <p className="mb-6">Your journey to seamless payments starts here.</p>
          <ModalFooter className="flex justify-center">
            <button
              onClick={handleClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </button>
          </ModalFooter>
        </div>
      </Modal>

      {showMultiForm && (
        <Modal isOpen={showMultiForm} onClose={() => {}}>
          <MultiForm
            currentStage={currentStage}
            onStageComplete={handleStageCompletion}
            onClose={handleCloseMultiForm}
          />
        </Modal>
      )}
    </>
  );
};

export default GetStartedPopup;
