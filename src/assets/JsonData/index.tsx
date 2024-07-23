import { Base64, BleError, Characteristic, ConnectionOptions, ConnectionPriority, Descriptor, Device, Service, Subscription, TransactionId, UUID } from 'react-native-ble-plx';

export const deviceData: Device[] = [
    {
        id: "12:34:56:78:9A:BC",
        name: "CorSense",
        rssi: -65,
        mtu: 23,
        manufacturerData: "SomeManufacturerData",
        serviceData: {},
        serviceUUIDs: ["0000180d-0000-1000-8000-00805f9b34fb"],
        localName: "CorSense",
        txPowerLevel: 4,
        solicitedServiceUUIDs: [],
        isConnectable: true,
        overflowServiceUUIDs: [],
        rawScanRecord: '',
        requestConnectionPriority: function (connectionPriority: ConnectionPriority, transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        readRSSI: function (transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        requestMTU: function (mtu: number, transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        connect: function (options?: ConnectionOptions): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        cancelConnection: function (): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        isConnected: function (): Promise<boolean> {
            throw new Error('Function not implemented.');
        },
        onDisconnected: function (listener: (error: BleError | null, device: Device) => void): Subscription {
            throw new Error('Function not implemented.');
        },
        discoverAllServicesAndCharacteristics: function (transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        services: function (): Promise<Service[]> {
            throw new Error('Function not implemented.');
        },
        characteristicsForService: function (serviceUUID: string): Promise<Characteristic[]> {
            throw new Error('Function not implemented.');
        },
        descriptorsForService: function (serviceUUID: UUID, characteristicUUID: UUID): Promise<Array<Descriptor>> {
            throw new Error('Function not implemented.');
        },
        readCharacteristicForService: function (serviceUUID: UUID, characteristicUUID: UUID, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        writeCharacteristicWithResponseForService: function (serviceUUID: UUID, characteristicUUID: UUID, valueBase64: Base64, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        writeCharacteristicWithoutResponseForService: function (serviceUUID: UUID, characteristicUUID: UUID, valueBase64: Base64, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        monitorCharacteristicForService: function (serviceUUID: UUID, characteristicUUID: UUID, listener: (error: BleError | null, characteristic: Characteristic | null) => void, transactionId?: TransactionId): Subscription {
            throw new Error('Function not implemented.');
        },
        readDescriptorForService: function (serviceUUID: UUID, characteristicUUID: UUID, descriptorUUID: UUID, transactionId?: string): Promise<Descriptor> {
            throw new Error('Function not implemented.');
        },
        writeDescriptorForService: function (serviceUUID: UUID, characteristicUUID: UUID, descriptorUUID: UUID, valueBase64: Base64, transactionId?: string): Promise<Descriptor> {
            throw new Error('Function not implemented.');
        }
    },
    {
        id: "98:76:54:32:10:FE",
        name: "CorSense Pro",
        rssi: -70,
        mtu: 23,
        manufacturerData: "AnotherManufacturerData",
        serviceData: {},
        serviceUUIDs: ["0000180d-0000-1000-8000-00805f9b34fb"],
        localName: "CorSense Pro",
        txPowerLevel: 3,
        solicitedServiceUUIDs: [],
        isConnectable: true,
        overflowServiceUUIDs: [],
        rawScanRecord: '',
        requestConnectionPriority: function (connectionPriority: ConnectionPriority, transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        readRSSI: function (transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        requestMTU: function (mtu: number, transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        connect: function (options?: ConnectionOptions): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        cancelConnection: function (): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        isConnected: function (): Promise<boolean> {
            throw new Error('Function not implemented.');
        },
        onDisconnected: function (listener: (error: BleError | null, device: Device) => void): Subscription {
            throw new Error('Function not implemented.');
        },
        discoverAllServicesAndCharacteristics: function (transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        services: function (): Promise<Service[]> {
            throw new Error('Function not implemented.');
        },
        characteristicsForService: function (serviceUUID: string): Promise<Characteristic[]> {
            throw new Error('Function not implemented.');
        },
        descriptorsForService: function (serviceUUID: UUID, characteristicUUID: UUID): Promise<Array<Descriptor>> {
            throw new Error('Function not implemented.');
        },
        readCharacteristicForService: function (serviceUUID: UUID, characteristicUUID: UUID, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        writeCharacteristicWithResponseForService: function (serviceUUID: UUID, characteristicUUID: UUID, valueBase64: Base64, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        writeCharacteristicWithoutResponseForService: function (serviceUUID: UUID, characteristicUUID: UUID, valueBase64: Base64, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        monitorCharacteristicForService: function (serviceUUID: UUID, characteristicUUID: UUID, listener: (error: BleError | null, characteristic: Characteristic | null) => void, transactionId?: TransactionId): Subscription {
            throw new Error('Function not implemented.');
        },
        readDescriptorForService: function (serviceUUID: UUID, characteristicUUID: UUID, descriptorUUID: UUID, transactionId?: string): Promise<Descriptor> {
            throw new Error('Function not implemented.');
        },
        writeDescriptorForService: function (serviceUUID: UUID, characteristicUUID: UUID, descriptorUUID: UUID, valueBase64: Base64, transactionId?: string): Promise<Descriptor> {
            throw new Error('Function not implemented.');
        }
    },
    {
        id: "AB:CD:EF:12:34:56",
        name: "CorSense Mini",
        rssi: -60,
        mtu: 23,
        manufacturerData: "MiniManufacturerData",
        serviceData: {},
        serviceUUIDs: ["0000180d-0000-1000-8000-00805f9b34fb"],
        localName: "CorSense Mini",
        txPowerLevel: 5,
        solicitedServiceUUIDs: [],
        isConnectable: true,
        overflowServiceUUIDs: [],
        rawScanRecord: '',
        requestConnectionPriority: function (connectionPriority: ConnectionPriority, transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        readRSSI: function (transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        requestMTU: function (mtu: number, transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        connect: function (options?: ConnectionOptions): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        cancelConnection: function (): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        isConnected: function (): Promise<boolean> {
            throw new Error('Function not implemented.');
        },
        onDisconnected: function (listener: (error: BleError | null, device: Device) => void): Subscription {
            throw new Error('Function not implemented.');
        },
        discoverAllServicesAndCharacteristics: function (transactionId?: TransactionId): Promise<Device> {
            throw new Error('Function not implemented.');
        },
        services: function (): Promise<Service[]> {
            throw new Error('Function not implemented.');
        },
        characteristicsForService: function (serviceUUID: string): Promise<Characteristic[]> {
            throw new Error('Function not implemented.');
        },
        descriptorsForService: function (serviceUUID: UUID, characteristicUUID: UUID): Promise<Array<Descriptor>> {
            throw new Error('Function not implemented.');
        },
        readCharacteristicForService: function (serviceUUID: UUID, characteristicUUID: UUID, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        writeCharacteristicWithResponseForService: function (serviceUUID: UUID, characteristicUUID: UUID, valueBase64: Base64, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        writeCharacteristicWithoutResponseForService: function (serviceUUID: UUID, characteristicUUID: UUID, valueBase64: Base64, transactionId?: TransactionId): Promise<Characteristic> {
            throw new Error('Function not implemented.');
        },
        monitorCharacteristicForService: function (serviceUUID: UUID, characteristicUUID: UUID, listener: (error: BleError | null, characteristic: Characteristic | null) => void, transactionId?: TransactionId): Subscription {
            throw new Error('Function not implemented.');
        },
        readDescriptorForService: function (serviceUUID: UUID, characteristicUUID: UUID, descriptorUUID: UUID, transactionId?: string): Promise<Descriptor> {
            throw new Error('Function not implemented.');
        },
        writeDescriptorForService: function (serviceUUID: UUID, characteristicUUID: UUID, descriptorUUID: UUID, valueBase64: Base64, transactionId?: string): Promise<Descriptor> {
            throw new Error('Function not implemented.');
        }
    }
];
