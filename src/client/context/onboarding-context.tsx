"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { AboutShopInput } from "../components/molecules/onboarding/forms/about-shop-form";
import { KYCFormInput } from "../components/molecules/onboarding/forms/kyc-form";
import { PickupRequestFormInput } from "../components/molecules/onboarding/forms/pickup-request-form";
import { SelectServiceInput } from "../components/molecules/onboarding/forms/select-service-form";
import { SetupPayoutInput } from "../components/molecules/onboarding/forms/setup-payout-form";
import { SetupShopInput } from "../components/molecules/onboarding/forms/setup-shop-form";
import { StartInput } from "../components/molecules/onboarding/forms/start-form";

// start onboarding context
type StartFormData = {
  start?: StartInput;
  selectService?: SelectServiceInput;
};

type StartOnboardingContextType = {
  startData: StartFormData;
  updateStartData: <T extends keyof StartFormData>(
    formName: T,
    data: StartFormData[T]
  ) => void;
};

const initialStartContextValue: StartOnboardingContextType = {
  startData: {},
  updateStartData: () => {},
};

const StartOnboardingContext = createContext(initialStartContextValue);

export const StartOnboardingDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [startData, setStartData] = useState<StartFormData>({});

  useEffect(() => {
    const storedData = localStorage.getItem("onboardingData");
    if (storedData) {
      const onboardingData = JSON.parse(storedData);
      setStartData(onboardingData);
    }
  }, []);

  const updateStartData = <T extends keyof StartFormData>(
    formName: T,
    data: StartFormData[T]
  ) => {
    const updatedData = { ...startData, [formName]: data };
    setStartData(updatedData);
    localStorage.setItem("onboardingData", JSON.stringify(updatedData));
    // save to db instd of ls
  };

  return (
    <StartOnboardingContext.Provider value={{ startData, updateStartData }}>
      {children}
    </StartOnboardingContext.Provider>
  );
};

export const useStartOnboardingContext = () => {
  return useContext(StartOnboardingContext);
};

// // // //  //  //  //  //  //
// Self service onboarding context
type SelfServiceData = {
  setupShopData?: SetupShopInput;
  aboutShopData?: AboutShopInput;
  kycData?: KYCFormInput;
  setupPayoutData?: SetupPayoutInput;
};

type SelfServiceOnboardingContextType = {
  selfServiceData: SelfServiceData;
  updateSelfServiceData: <T extends keyof SelfServiceData>(
    formName: T,
    data: SelfServiceData[T]
  ) => void;
};

const initialSelfServiceContextValue: SelfServiceOnboardingContextType = {
  selfServiceData: {},
  updateSelfServiceData: () => {},
};

const SelfServiceOnboardingContext = createContext(
  initialSelfServiceContextValue
);

export const SelfServiceOnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selfServiceData, setSelfServiceData] = useState<SelfServiceData>({});

  useEffect(() => {
    const storedData = localStorage.getItem("onboardingData");
    if (storedData) {
      const onboardingData = JSON.parse(storedData);
      setSelfServiceData(onboardingData);
    }
  }, []);

  const updateSelfServiceData = <T extends keyof SelfServiceData>(
    formName: T,
    data: SelfServiceData[T]
  ) => {
    const updatedData = { ...selfServiceData, [formName]: data };
    setSelfServiceData(updatedData);
    localStorage.setItem("onboardingData", JSON.stringify(updatedData));
    // save to db instd of ls
  };

  return (
    <SelfServiceOnboardingContext.Provider
      value={{ selfServiceData, updateSelfServiceData }}
    >
      {children}
    </SelfServiceOnboardingContext.Provider>
  );
};

export const useSelfServiceOnboardingContext = () => {
  return useContext(SelfServiceOnboardingContext);
};

// // //  //  //  //  //  //
// Managed service onboarding context
type ManagedServiceData = {
  pickupRequestData?: PickupRequestFormInput;
};

type ManagedServiceOnboardingContextType = {
  managedServiceData: ManagedServiceData;
  updateManagedServiceData: <T extends keyof ManagedServiceData>(
    formName: T,
    data: ManagedServiceData[T]
  ) => void;
};

const initialManagedServiceOnboardingContextValue: ManagedServiceOnboardingContextType =
  {
    managedServiceData: {},
    updateManagedServiceData: () => {},
  };

const ManagedServiceOnboardingContext = createContext(
  initialManagedServiceOnboardingContextValue
);

export const ManagedServiceOnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [managedServiceData, setManagedServiceData] =
    useState<ManagedServiceData>({});

  useEffect(() => {
    const storedData = localStorage.getItem("onboardingData");
    if (storedData) {
      const onboardingData = JSON.parse(storedData);
      setManagedServiceData(onboardingData);
    }
  }, []);

  const updateManagedServiceData = (formName: string, data: any) => {
    const updatedData = { ...managedServiceData, [formName]: data };
    setManagedServiceData(updatedData);
    localStorage.setItem("onboardingData", JSON.stringify(updatedData));
    // save to db instd of ls
  };

  return (
    <ManagedServiceOnboardingContext.Provider
      value={{ managedServiceData, updateManagedServiceData }}
    >
      {children}
    </ManagedServiceOnboardingContext.Provider>
  );
};

export const useManagedServiceOnboardingContext = () => {
  return useContext(ManagedServiceOnboardingContext);
};

// // //  //  //  //  //  //
// First listing context
const initialAddFirstListingContextValue = {
  isFirstListingAdded: false,
  updateFirstListingAdded: () => {},
};

const AddFirstListingContext = createContext(
  initialAddFirstListingContextValue
);

export const AddFirstListingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFirstListingAdded, setIsFirstListingAdded] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("onboardingData");
    if (storedData) {
      const onboardingData = JSON.parse(storedData);
      setOnboardingData(onboardingData);
      setIsFirstListingAdded(onboardingData?.isFirstListingAdded);
    }
  }, []);

  const updateFirstListingAdded = () => {
    const updatedData = { ...onboardingData, isFirstListingAdded: true };
    setIsFirstListingAdded(true);
    localStorage.setItem("onboardingData", JSON.stringify(updatedData));
    // save to db instd of ls
  };

  return (
    <AddFirstListingContext.Provider
      value={{ isFirstListingAdded, updateFirstListingAdded }}
    >
      {children}
    </AddFirstListingContext.Provider>
  );
};

export const useAddFirstListingContext = () => {
  return useContext(AddFirstListingContext);
};

// // //  //  //  //  //  //
// All Context Provider
export const OnboardingDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StartOnboardingDataProvider>
      <SelfServiceOnboardingProvider>
        <ManagedServiceOnboardingProvider>
          <AddFirstListingProvider> {children}</AddFirstListingProvider>
        </ManagedServiceOnboardingProvider>
      </SelfServiceOnboardingProvider>
    </StartOnboardingDataProvider>
  );
};

export const useOnboardingContext = () => {
  const startContext = useStartOnboardingContext();
  const selfServiceContext = useSelfServiceOnboardingContext();
  const managedServiceContext = useManagedServiceOnboardingContext();
  const addFirstListingContext = useAddFirstListingContext();

  const service = startContext.startData.selectService?.service?.toLowerCase();

  // context that holds all filled forms and if all forms are filled
  const checkOnboardingCompleted = () => {
    // assigns the total forms
    let totalForms: any = {};
    if (service === "self services") {
      totalForms = {
        ...selfServiceContext.selfServiceData,
        isFirstListingAdded: addFirstListingContext.isFirstListingAdded,
      };
    }
    if (service === "managed services") {
      totalForms = { ...managedServiceContext.managedServiceData };
    }

    // holds all filled forms
    const filledForms: any = {};
    for (const key in totalForms) {
      if (totalForms[key] !== undefined) {
        filledForms[key] = totalForms[key];
      }
    }

    // check if all forms are filled
    let isOnboardingComplete;
    if (service === "self services") {
      isOnboardingComplete = Object.keys(filledForms).length === 7;
    }
    if (service === "managed services") {
      isOnboardingComplete = Object.keys(filledForms).length === 3;
    }

    return { filledForms, isOnboardingComplete };
  };

  return {
    startContext,
    selfServiceContext,
    addFirstListingContext,
    managedServiceContext,
    checkOnboardingCompleted,
  };
};
