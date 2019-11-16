/**
 * Enums.
 *
 * @module lib/enums
 */

'use strict';

module.exports = (version) => enums[version];

const enums = {};

enums['1.6'] = {
    AUTHORIZATION_STATUS: [
        'Accepted',
        'Blocked',
        'Expired',
        'Invalid',
        'ConcurrentTx'
    ],

    AVAILABILITY_STATUS: [
        'Accepted',
        'Rejected',
        'Scheduled'
    ],

    AVAILABILITY_TYPE: [
        'Inoperative',
        'Operative'
    ],

    CANCEL_RESERVATION_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CHARGE_POINT_ERROR_CODE: [
        'ConnectorLockFailure',
        'EVCommunicationError',
        'GroundFailure',
        'HighTemperature',
        'InternalError',
        'LocalListConflict',
        'NoError',
        'OtherError',
        'OverCurrentFailure',
        'OverVoltage',
        'PowerMeterFailure',
        'PowerSwitchFailure',
        'ReaderFailure',
        'ResetFailure',
        'UnderVoltage',
        'WeakSignal'
    ],

    CHARGE_POINT_STATUS: [
        'Available',
        'Preparing',
        'Charging',
        'SuspendedEVSE',
        'SuspendedEV',
        'Finishing',
        'Reserved',
        'Unavailable',
        'Faulted'
    ],

    CHARGING_PROFILE_KIND_TYPE: [
        'Absolute',
        'Recurring',
        'Relative'
    ],

    CHARGING_PROFILE_PURPOSE_TYPE: [
        'ChargePointMaxProfile',
        'TxDefaultProfile',
        'TxProfile'
    ],

    CHARGING_PROFILE_STATUS: [
        'Accepted',
        'Rejected',
        'NotSupported'
    ],

    CHARGING_RATE_UNIT_TYPE: [
        'W',
        'A'
    ],

    CLEAR_CACHE_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CLEAR_CHARGING_PROFILE_STATUS: [
        'Accepted',
        'Unknown'
    ],

    CONFIGURATION_STATUS: [
        'Accepted',
        'Rejected',
        'RebootRequired',
        'NotSupported'
    ],

    DATA_TRANSFER_STATUS: [
        'Accepted',
        'Rejected',
        'UnknownMessageId',
        'UnknownVendorId'
    ],

    DIAGNOSTICS_STATUS: [
        'Idle',
        'Uploaded',
        'UploadFailed',
        'Uploading'
    ],

    FIRMWARE_STATUS: [
        'Downloaded',
        'DownloadFailed',
        'Downloading',
        'Idle',
        'InstallationFailed',
        'Installing',
        'Installed'
    ],

    GET_COMPOSITE_SCHEDULE_STATUS: [
        'Accepted',
        'Rejected'
    ],

    LOCATION: [
        'Body',
        'Cable',
        'EV',
        'Inlet',
        'Outlet'
    ],

    MEASURAND: [
        'Current.Export',
        'Current.Import',
        'Current.Offered',
        'Energy.Active.Export.Register',
        'Energy.Active.Import.Register',
        'Energy.Reactive.Export.Register',
        'Energy.Reactive.Import.Register',
        'Energy.Active.Export.Interval',
        'Energy.Active.Import.Interval',
        'Energy.Reactive.Export.Interval',
        'Energy.Reactive.Import.Interval',
        'Frequency',
        'Power.Active.Export',
        'Power.Active.Import',
        'Power.Factor',
        'Power.Offered',
        'Power.Reactive.Export',
        'Power.Reactive.Import',
        'RPM',
        'SoC',
        'Temperature',
        'Voltage'
    ],

    MESSAGE_TRIGGER: [
        'BootNotification',
        'DiagnosticsStatusNotification',
        'FirmwareStatusNotification',
        'Heartbeat',
        'MeterValues',
        'StatusNotification'
    ],

    PHASE: [
        'L1',
        'L2',
        'L3',
        'N',
        'L1-N',
        'L2-N',
        'L3-N',
        'L1-L2',
        'L2-L3',
        'L3-L1'
    ],

    READING_CONTEXT: [
        'Interruption.Begin',
        'Interruption.End',
        'Other',
        'Sample.Clock',
        'Sample.Periodic',
        'Transaction.Begin',
        'Transaction.End',
        'Trigger'
    ],

    REASON: [
        'DeAuthorized',
        'EmergencyStop',
        'EVDisconnected',
        'HardReset',
        'Local',
        'Other',
        'PowerLoss',
        'Reboot',
        'Remote',
        'SoftReset',
        'UnlockCommand'
    ],

    RECURRENCY_KIND_TYPE: [
        'Daily',
        'Weekly'
    ],

    REGISTRATION_STATUS: [
        'Accepted',
        'Pending',
        'Rejected'
    ],

    REMOTE_START_STOP_STATUS: [
        'Accepted',
        'Rejected'
    ],

    RESERVATION_STATUS: [
        'Accepted',
        'Faulted',
        'Occupied',
        'Rejected',
        'Unavailable'
    ],

    RESET_STATUS: [
        'Accepted',
        'Rejected'
    ],

    RESET_TYPE: [
        'Hard',
        'Soft'
    ],

    TRIGGER_MESSAGE_STATUS: [
        'Accepted',
        'Rejected',
        'NotImplemented'
    ],

    UNIT_OF_MEASURE: [
        'Wh',
        'kWh',
        'varh',
        'kvarh',
        'W',
        'kW',
        'VA',
        'kVA',
        'var',
        'kvar',
        'A',
        'V',
        'Celsius',
        'Fahrenheit',
        'K',
        'Percent'
    ],

    UNLOCK_STATUS: [
        'Unlocked',
        'UnlockFailed',
        'NotSupported'
    ],

    UPDATE_STATUS: [
        'Accepted',
        'Failed',
        'NotSupported',
        'VersionMismatch'
    ],

    UPDATE_TYPE: [
        'Differential',
        'Full'
    ],

    VALUE_FORMAT: [
        'Raw',
        'SignedData'
    ]
};

enums['2.0'] = {
    '15118_EV_CERTIFICATE_STATUS': [
        'Accepted',
        'Failed'
    ],

    APN_AUTHENTICATION: [
        'CHAP',
        'NONE',
        'PAP',
        'AUTO'
    ],

    ATTRIBUTE: [
        'Actual',
        'Target',
        'MinSet',
        'MaxSet'
    ],

    AUTHORIZATION_STATUS: [
        'Accepted',
        'Blocked',
        'ConcurrentTx',
        'Expired',
        'Invalid',
        'NoCredit',
        'NotAllowedTypeEVSE',
        'NotAtThisLocation',
        'NotAtThisTime',
        'Unknown'
    ],

    BOOT_REASON: [
        'ApplicationReset',
        'FirmwareUpdate',
        'LocalReset',
        'PowerUp',
        'RemoteReset',
        'ScheduledReset',
        'Triggered',
        'Unknown',
        'Watchdog'
    ],

    CANCEL_RESERVATION_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CERTIFICATE_SIGNED_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CERTIFICATE_SIGNING_USE: [
        'ChargingStationCertificate',
        'V2GCertificate'
    ],

    CERTIFICATE_STATUS: [
        'Accepted',
        'SignatureError',
        'CertificateExpired',
        'CertificateRevoked',
        'NoCertificateAvailable',
        'CertChainError',
        'ContractCancelled'
    ],

    CERTIFICATE_USE: [
        'V2GRootCertficate',
        'MORootCertificate',
        'CSOSubCA1',
        'CSOSubCA2',
        'CSMSRootCertificate',
        'ManufacturerRootCertificate'
    ],

    CHANGE_AVAILABILITY_STATUS: [
        'Accepted',
        'Rejected',
        'Scheduled'
    ],

    CHARGING_LIMIT_SOURCE: [
        'EMS',
        'Other',
        'SO',
        'CSO'
    ],

    CHARGING_PROFILE_KIND: [
        'Absolute',
        'Recurring',
        'Relative'
    ],

    CHARGING_PROFILE_PURPOSE: [
        'ChargingStationExternalConstraints',
        'ChargingStationMaxProfile',
        'TxDefaultProfile',
        'TxProfile'
    ],

    CHARGING_PROFILE_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CHARGING_RATE_UNIT: [
        'W',
        'A'
    ],

    CHARGING_STATE: [
        'Charging',
        'EVDetected',
        'SuspendedEV',
        'SuspendedEVSE'
    ],

    CLEAR_CACHE_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CLEAR_CHARGING_PROFILE_STATUS: [
        'Accepted',
        'Unknown'
    ],

    CLEAR_MESSAGE_STATUS: [
        'Accepted',
        'Unknown'
    ],

    CLEAR_MONITORING_STATUS: [
        'Accepted',
        'Rejected',
        'NotFound'
    ],

    COMPONENT_CRITERION: [
        'Active',
        'Available',
        'Enabled',
        'Problem'
    ],

    CONNECTOR: [
        'cCCS1',
        'cCCS2',
        'cG105',
        'cTesla',
        'cType1',
        'cType2',
        's309-1P-16A',
        's309-1P-32A',
        's309-3P-16A',
        's309-3P-32A',
        'sBS1361',
        'sCEE-7-7',
        'sType2',
        'sType3',
        'Other1PhMax16A',
        'Other1PhOver16A',
        'Other3Ph',
        'Pan',
        'wInductive',
        'wResonant',
        'Undetermined',
        'Unknown'
    ],

    CONNECTOR_STATUS: [
        'Available',
        'Occupied',
        'Reserved',
        'Unavailable',
        'Faulted'
    ],

    COST_KIND: [
        'CarbonDioxideEmission',
        'RelativePricePercentage',
        'RenewableGenerationPercentage'
    ],

    CUSTOMER_INFORMATION_STATUS: [
        'Accepted',
        'Rejected',
        'Invalid'
    ],

    DATA: [
        'string',
        'decimal',
        'integer',
        'dateTime',
        'boolean',
        'OptionList',
        'SequenceList',
        'MemberList'
    ],

    DATA_TRANSFER_STATUS: [
        'Accepted',
        'Rejected',
        'UnknownMessageId',
        'UnknownVendorId'
    ],

    DELETE_CERTIFICATE_STATUS: [
        'Accepted',
        'Failed',
        'NotFound'
    ],

    DISPLAY_MESSAGE_STATUS: [
        'Accepted',
        'NotSupportedMessageFormat',
        'Rejected',
        'NotSupportedPriority',
        'NotSupportedState',
        'UnknownTransaction'
    ],

    ENCODING_METHOD: [
        'Other',
        'DLMS Message',
        'COSEM Protected Data',
        'EDL'
    ],

    ENERGY_TRANSFER_MODE: [
        'AC_single_phase_core',
        'AC_three_phase_core',
        'DC_combo_core',
        'DC_core',
        'DC_extended',
        'DC_unique'
    ],

    EVENT_TRIGGER: [
        'Alerting',
        'Delta',
        'Periodic'
    ],

    FIRMWARE_STATUS: [
        'CertificateVerified',
        'Downloaded',
        'DownloadFailed',
        'Downloading',
        'DownloadScheduled',
        'DownloadPaused',
        'Idle',
        'FirmwareStatusNotificationRequest',
        'InstallationFailed',
        'Installing',
        'Installed',
        'InstallRebooting',
        'InstallScheduled',
        'Failure',
        'InvalidSignature',
        'InvalidCertificate',
        'RevokedCertificate',
        'PublishFailed',
        'SignatureVerified'
    ],

    GENERIC_DEVICE_MODEL_STATUS: [
        'Accepted',
        'Rejected',
        'NotSupported'
    ],

    GENERIC_STATUS: [
        'Accepted',
        'Rejected'
    ],

    GET_CHARGING_PROFILE_STATUS: [
        'Accepted',
        'NoProfiles'
    ],

    GET_COMPOSITE_SCHEDULE_STATUS: [
        'Accepted',
        'Rejected'
    ],

    GET_DISPLAY_MESSAGES_STATUS: [
        'Accepted',
        'Unknown'
    ],

    GET_INSTALLED_CERTIFICATE_STATUS: [
        'Accepted',
        'NotFound'
    ],

    GET_VARIABLE_STATUS: [
        'Accepted',
        'Rejected',
        'UnknownComponent',
        'UnknownVariable',
        'NotSupportedAttributeType'
    ],

    HASH_ALGORITHM: [
        'SHA256',
        'SHA384',
        'SHA512'
    ],

    ID_TOKEN: [
        'Central',
        'eMAID',
        'ISO14443',
        'KeyCode',
        'Local',
        'NoAuthorization',
        'ISO15693'
    ],

    LOCATION: [
        'Body',
        'Cable',
        'EV',
        'Inlet',
        'Outlet'
    ],

    LOG: [
        'DiagnosticsLog',
        'SecurityLog'
    ],

    LOG_STATUS: [
        'Accepted',
        'Rejected',
        'AcceptedCanceled'
    ],

    MEASURAND: [
        'Current.Export',
        'Current.Import',
        'Current.Offered',
        'Energy.Active.Export.Register',
        'Energy.Active.Import.Register',
        'Energy.Reactive.Export.Register',
        'Energy.Reactive.Import.Register',
        'Energy.Active.Export.Interval',
        'Energy.Active.Import.Interval',
        'Energy.Active.Net',
        'Energy.Reactive.Export.Interval',
        'Energy.Reactive.Import.Interval',
        'Energy.Reactive.Net',
        'Energy.Apparent.Net',
        'Energy.Apparent.Import',
        'Energy.Apparent.Export',
        'Frequency',
        'Power.Active.Export',
        'Power.Active.Import',
        'Power.Factor',
        'Power.Offered',
        'Power.Reactive.Export',
        'Power.Reactive.Import',
        'SoC',
        'Voltage'
    ],

    MESSAGE_FORMAT: [
        'ASCII',
        'HTML',
        'URI',
        'UTF8'
    ],

    MESSAGE_PRIORITY: [
        'AlwaysFront',
        'InFront',
        'NormalCycle'
    ],

    MESSAGE_STATE: [
        'Charging',
        'Faulted',
        'Idle',
        'Unavailable'
    ],

    MESSAGE_TRIGGER: [
        'BootNotification',
        'LogStatusNotification',
        'FirmwareStatusNotification',
        'Heartbeat',
        'MeterValues',
        'SignChargingStationCertificate',
        'SignV2GCertificate',
        'StatusNotification',
        'TransactionEvent'
    ],

    MONITOR: [
        'UpperThreshold',
        'LowerThreshold',
        'Delta',
        'Periodic',
        'PeriodicClockAligned'
    ],

    MONITORING_BASE: [
        'All',
        'FactoryDefault',
        'None'
    ],

    MONITORING_CRITERION: [
        'ThresholdMonitoring',
        'DeltaMonitoring',
        'PeriodicMonitoring'
    ],

    MUTABILITY: [
        'ReadOnly',
        'WriteOnly',
        'ReadWrite'
    ],

    NOTIFY_EV_CHARGING_NEEDS_STATUS: [
        'Accepted',
        'Rejected',
        'Processing'
    ],

    OCPP_INTERFACE: [
        'Wired0',
        'Wired1',
        'Wired2',
        'Wired3',
        'Wireless0',
        'Wireless1',
        'Wireless2',
        'Wireless3'
    ],

    OCPP_TRANSPORT: [
        'JSON',
        'SOAP'
    ],

    OCPP_VERSION: [
        'OCPP12',
        'OCPP15',
        'OCPP16',
        'OCPP20'
    ],

    OPERATIONAL_STATUS: [
        'Inoperative',
        'Operative'
    ],

    PHASE: [
        'L1',
        'L2',
        'L3',
        'N',
        'L1-N',
        'L2-N',
        'L3-N',
        'L1-L2',
        'L2-L3',
        'L3-L1'
    ],

    PUBLISH_FIRMWARE_STATUS: [
        'Downloaded',
        'DownloadFailed',
        'Downloading',
        'DownloadScheduled',
        'DownloadPaused',
        'PublishFailed',
        'Published',
        'InvalidChecksum',
        'ChecksumVerified'
    ],

    READING_CONTEXT: [
        'Interruption.Begin',
        'Interruption.End',
        'Other',
        'Sample.Clock',
        'Sample.Periodic',
        'Transaction.Begin',
        'Transaction.End',
        'Trigger'
    ],

    REASON: [
        'DeAuthorized',
        'EmergencyStop',
        'EnergyLimitReached',
        'EVDisconnected',
        'GroundFault',
        'ImmediateReset',
        'Local',
        'LocalOutOfCredit',
        'MasterPass',
        'Other',
        'OvercurrentFault',
        'PowerLoss',
        'PowerQuality',
        'Reboot',
        'Remote',
        'SOCLimitReached',
        'StoppedByEV',
        'TimeLimitReached',
        'Timeout',
        'UnlockCommand'
    ],

    RECURRENCY_KIND: [
        'Daily',
        'Weekly'
    ],

    REGISTRATION_STATUS: [
        'Accepted',
        'Pending',
        'Rejected'
    ],

    REPORT_BASE: [
        'ConfigurationInventory',
        'FullInventory',
        'SummaryInventory'
    ],

    REQUEST_START_STOP_STATUS: [
        'Accepted',
        'Rejected'
    ],

    RESERVATION_UPDATE_STATUS: [
        'Expired',
        'Removed'
    ],

    RESERVE_NOW_STATUS: [
        'Accepted',
        'Faulted',
        'Occupied',
        'Rejected',
        'Unavailable'
    ],

    RESET: [
        'Immediate',
        'OnIdle'
    ],

    RESET_STATUS: [
        'Accepted',
        'Rejected',
        'Scheduled'
    ],

    SECURITY_EVENT: [
        'FirmwareUpdated',
        'FailedToAuthenticateAtCsms',
        'CsmsFailedToAuthenticate',
        'SettingSystemTime',
        'StartupOfTheDevice',
        'ResetOrReboot',
        'SecurityLogWasCleared',
        'ReconfigurationOfSecurityParameters',
        'MemoryExhaustion',
        'InvalidMessages',
        'AttemptedReplayAttacks',
        'TamperDetectionActivated',
        'InvalidFirmwareSignature',
        'InvalidFirmwareSigningCertificate',
        'InvalidCsmsCertificate',
        'InvalidChargingStationCertificate',
        'InvalidTLSVersion',
        'InvalidTLSCipherSuite'
    ],

    SET_MONITORING_STATUS: [
        'Accepted',
        'UnknownComponent',
        'UnknownVariable',
        'UnsupportedMonitorType',
        'Rejected',
        'OutOfRange',
        'Duplicate'
    ],

    SET_NETWORK_PROFILE_STATUS: [
        'Accepted',
        'Rejected',
        'Failed'
    ],

    SET_VARIABLE_STATUS: [
        'Accepted',
        'Rejected',
        'InvalidValue',
        'UnknownComponent',
        'UnknownVariable',
        'NotSupportedAttributeType',
        'OutOfRange',
        'RebootRequired'
    ],

    SIGNATURE_METHOD: [
        'ECDSAP256SHA256',
        'ECDSAP384SHA384',
        'ECDSA192SHA256'
    ],

    TRANSACTION_EVENT: [
        'Ended',
        'Started',
        'Updated'
    ],

    TRIGGER_MESSAGE_STATUS: [
        'Accepted',
        'Rejected',
        'NotImplemented'
    ],

    TRIGGER_REASON: [
        'Authorized',
        'CablePluggedIn',
        'ChargingRateChanged',
        'ChargingStateChanged',
        'Deauthorized',
        'EnergyLimitReached',
        'EVCommunicationLost',
        'EVConnectTimeout',
        'MeterValueClock',
        'MeterValuePeriodic',
        'TimeLimitReached',
        'Trigger',
        'UnlockCommand',
        'StopAuthorized',
        'EVDeparted',
        'EVDetected',
        'RemoteStop',
        'RemoteStart'
    ],

    UNLOCK_STATUS: [
        'Unlocked',
        'UnlockFailed'
    ],

    UNPUBLISH_FIRMWARE_STATUS: [
        'DownloadOngoing',
        'NoFirmware',
        'Unpublished'
    ],

    UPDATE: [
        'Differential',
        'Full'
    ],

    UPDATE_FIRMWARE_STATUS: [
        'Accepted',
        'Rejected',
        'AcceptedCanceled'
    ],

    UPDATE_STATUS: [
        'Accepted',
        'Failed',
        'VersionMismatch'
    ],

    UPLOAD_LOG_STATUS: [
        'BadMessage',
        'Idle',
        'NotSupportedOperation',
        'PermissionDenied',
        'Uploaded',
        'UploadFailure',
        'Uploading'
    ],

    VPN: [
        'IKEv2',
        'IPSec',
        'L2TP',
        'PPTP'
    ]
};
