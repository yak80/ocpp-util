/**
 * Enums.
 *
 * @module lib/enums
 */

'use strict';

module.exports = (version) => enums[version];

const enums = {};

enums['1.6'] = {
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

    FIRMWARE_STATUS: [
        'Downloaded',
        'DownloadFailed',
        'Downloading',
        'Idle',
        'InstallationFailed',
        'Installing',
        'Installed'
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

    VALUE_FORMAT: [
        'Raw',
        'SignedData'
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

    LOCATION: [
        'Body',
        'Cable',
        'EV',
        'Inlet',
        'Outlet'
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

    CONFIGURATION_STATUS: [
        'Accepted',
        'Rejected',
        'RebootRequired',
        'NotSupported'
    ],

    REQUEST_START_STOP_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CHANGE_AVAILABILITY_STATUS: [
        'Accepted',
        'Rejected',
        'Scheduled'
    ],

    RESET_STATUS: [
        'Accepted',
        'Rejected'
    ],

    DIAGNOSTICS_STATUS: [
        'Idle',
        'Uploaded',
        'UploadFailed',
        'Uploading'
    ],

    TRIGGER_MESSAGE_STATUS: [
        'Accepted',
        'Rejected',
        'NotImplemented'
    ],

    RESERVATION_STATUS: [
        'Accepted',
        'Faulted',
        'Occupied',
        'Rejected',
        'Unavailable'
    ],

    CANCEL_RESERVATION_STATUS: [
        'Accepted',
        'Rejected'
    ],

    UNLOCK_STATUS: [
        'Unlocked',
        'UnlockFailed',
        'NotSupported'
    ]
};

enums['2.0'] = {
    CONNECTOR_STATUS: [
        'Available',
        'Occupied',
        'Reserved',
        'Unavailable',
        'Faulted'
    ],

    TRANSACTION_EVENT: [
        'Ended',
        'Started',
        'Updated'
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

    CONTEXT: [
        'Interruption.Begin',
        'Interruption.End',
        'Other',
        'Sample.Clock',
        'Sample.Periodic',
        'Transaction.Begin',
        'Transaction.End',
        'Trigger'
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

    LOCATION: [
        'Body',
        'Cable',
        'EV',
        'Inlet',
        'Outlet'
    ],

    SIGNATURE_METHOD: [
        'ECDSAP256SHA256',
        'ECDSAP384SHA384',
        'ECDSA192SHA256'
    ],

    ENCODING_METHOD: [
        'Other',
        'DLMS Message',
        'COSEM Protected Data',
        'EDL'
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

    REQUEST_START_STOP_STATUS: [
        'Accepted',
        'Rejected'
    ],

    CHANGE_AVAILABILITY_STATUS: [
        'Accepted',
        'Rejected',
        'Scheduled'
    ],

    UPDATE_FIRMWARE_STATUS: [
        'Accepted',
        'Rejected',
        'AcceptedCanceled'
    ],

    RESET_STATUS: [
        'Accepted',
        'Rejected',
        'Scheduled'
    ],

    LOG_STATUS: [
        'Accepted',
        'Rejected',
        'AcceptedCanceled'
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

    TRIGGER_MESSAGE_STATUS: [
        'Accepted',
        'Rejected',
        'NotImplemented'
    ],

    RESERVE_NOW_STATUS: [
        'Accepted',
        'Faulted',
        'Occupied',
        'Rejected',
        'Unavailable'
    ],

    CANCEL_RESERVATION_STATUS: [
        'Accepted',
        'Rejected'
    ],

    UNLOCK_STATUS: [
        'Unlocked',
        'UnlockFailed'
    ]
};
