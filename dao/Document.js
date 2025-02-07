const prisma = require("../prisma/prisma");
const { updateFileInDocument } = require("./File");

const getDocuments = async () => {
    try {
        return await prisma.documents.findMany({
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting all documents:", error);
        return new Error(error);
    }
};

const getDocumentById = async (documentId) => {
    try {
        return await prisma.documents.findUnique({
            where: {document_id: documentId},
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting document by ID:", error);
        return new Error(error);
    }
};

const getDocumentsForBusiness = async (businessId) => {
    try {
        return await prisma.documents.findMany({
            where: {business_id: businessId},
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for business:", error);
        return new Error(error);
    }
};

const getDocumentsForDeliveryPerson = async (deliveryPersonId) => {
    try {
        return await prisma.documents.findMany({
            where: {delivery_person_id: deliveryPersonId},
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for delivery person:", error);
        return new Error(error);
    }
};

const getDocumentsForDriver = async (driverId) => {
    try {
        return await prisma.documents.findMany({
            where: {driver_id: driverId},
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for driver:", error);
        return new Error(error);
    }
};

const getDocumentsForUser = async (userId) => {
    try {
        return await prisma.documents.findMany({
            where: {user_id: userId},
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for user:", error);
        return new Error(error);
    }
};

const getDocumentsForVehicle = async (vehicleId) => {
    try {
        return await prisma.documents.findMany({
            where: {vehicle_id: vehicleId},
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for vehicle:", error);
        return new Error(error);
    }
};

const getDocumentsByType = async (documentType) => {
    try {
        return await prisma.documents.findMany({
            where: {document_type: documentType},
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents by type:", error);
        return new Error(error);
    }
};

const getDocumentsForUserByType = async (userId, documentType) => {
    try {
        return await prisma.documents.findMany({
            where: {
                user_id: userId,
                document_type: documentType,
            },
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for user by type:", error);
        return new Error(error);
    }
};

const getDocumentsForBusinessByType = async (businessId, documentType) => {
    try {
        return await prisma.documents.findMany({
            where: {
                business_id: businessId,
                document_type: documentType,
            },
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for business by type:", error);
        return new Error(error);
    }
};

const getDocumentsForDriverByType = async (driverId, documentType) => {
    try {
        return await prisma.documents.findMany({
            where: {
                driver_id: driverId,
                document_type: documentType,
            },
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for driver by type:", error);
        return new Error(error);
    }
};

const getDocumentsForDeliveryPersonByType = async (deliveryPersonId, documentType) => {
    try {
        return await prisma.documents.findMany({
            where: {
                delivery_person_id: deliveryPersonId,
                document_type: documentType,
            },
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for delivery person by type:", error);
        return new Error(error);
    }
};

const getDocumentsForVehicleByType = async (vehicleId, documentType) => {
    try {
        return await prisma.documents.findMany({
            where: {
                vehicle_id: vehicleId,
                document_type: documentType,
            },
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error getting documents for vehicle by type:", error);
        return new Error(error);
    }
};

const findDocumentByTypeAndDeliveryDriverId = async (documentType, deliveryDriverId) => {
    try {
        return await prisma.documents.findFirst({
            where: {
                AND: [
                    { document_type: documentType },
                    { delivery_driver_id: deliveryDriverId}
                ]
            }
        });
    } catch (error) {
        console.error("Error finding document by type and delivery driver ID:", error);
        throw new Error("Unable to find document");
    }
}

const findDocumentByTypeAndDriverId = async (documentType, driverId) => {
    try {
        return await prisma.documents.findFirst({
            where: {
                AND: [
                    { document_type: documentType },
                    { driver_id: driverId}
                ]
            }
        });
    } catch (error) {
        console.error("Error finding document by type and driver ID:", error);
        throw new Error("Unable to find document");
    }
}

const createDocument = async (documentData, filesData = []) => {
    for (let file of filesData) {
        delete file.data
        delete file.base64
        delete file.name
    }
    const publicDocumentTypes = ["PROFILE_PICTURE", "BUSINESS_LOGO", "BUSINESS_BANNER", "MENU_ITEM_IMAGE", "LOST_ITEM_IMAGE"];
    if (publicDocumentTypes.includes(documentData.document_type)) {
        documentData.public = true; 
    }
    try {
        return await prisma.documents.create({
            data: {
                ...documentData,
                files: {
                    create: filesData,
                },
            },
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error creating document:", error);
        return new Error(error);
    }
};

const updateDocumentExpirationDate = async (documentId, expirationDate) => {
    try {
        return await prisma.documents.update({
            where: {document_id: documentId},
            data: {
                expiration_date: expirationDate,
            },
        });
    } catch (error) {
        console.error("Error updating document's expiration date:", error);
        return new Error(error);
    }
};

const updateDocumentIssueDate = async (documentId, issueDate) => {
    try {
        return await prisma.documents.update({
            where: {document_id: documentId},
            data: {
                issue_date: issueDate,
            },
        });
    } catch (error) {
        console.error("Error updating document's issue date:", error);
        return new Error(error);
    }
};

const updateDocumentFiles = async (documentId, filesData) => {
    try {
        return await prisma.documents.update({
            where: {document_id: documentId},
            data: {
                files: {
                    deleteMany: [{document_id: documentId}], // Deletes all files associated with the document
                    create: filesData, // Creates new file entries
                },
            },
            include: {
                files: true,
            },
        });
    } catch (error) {
        console.error("Error updating document's files:", error);
        return new Error(error);
    }
};

const updateDocumentAdditionalInfo = async (documentId, jsonData) => {
    try {
        return await prisma.documents.update({
            where: {document_id: documentId},
            data: {additional_info: jsonData},
        });
    } catch (error) {
        console.error("Error updating document's additional info:", error);
        return new Error(error);
    }
};
const linkDocumentToUser = async (documentId, userId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                user: {
                    connect: {
                        user_id: userId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking document to user:", error);
        return new Error(error);
    }
};

const linkDocumentToTransaction = async (documentId, transactionId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                transactions: {
                    connect: {
                        transaction_id: transactionId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking document to transaction:", error);
        return new Error(error);
    }
};

const linkDocumentToVehicle = async (documentId, vehicleId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                vehicles: {
                    connect: {
                        vehicle_id: vehicleId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking document to vehicle:", error);
        return new Error(error);
    }
};

const linkDocumentToMenuItem = async (documentId, menuItemId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                menu_items: {
                    connect: {
                        menu_item_id: menuItemId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking menu item image to menu item:", error);
        return new Error(error);
    }
};

const linkDocumentToLostItem = async (documentId, lostItemId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                lost_items: {
                    connect: {
                        lost_item_id: lostItemId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking lost item document:", error);
        return new Error(error);
    }
};

const linkDocumentToDriver = async (documentId, driverId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                drivers: {
                    connect: {
                        driver_id: driverId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking document to driver:", error);
        return new Error(error);
    }
};

const linkDocumentToBusiness = async (documentId, businessId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                business: {
                    connect: {
                        business_id: businessId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking document to business:", error);
        return new Error(error);
    }
};

const linkDocumentToDeliveryDriver = async (documentId, deliveryDriverId) => {
    try {
        return await prisma.documents.update({
            where: { document_id: documentId },
            data: {
                delivery_driver: {
                    connect: {
                        delivery_driver_id: deliveryDriverId
                    }
                }
            },
        });
    } catch (error) {
        console.error("Error linking document to delivery driver:", error);
        return new Error(error);
    }
};
const deleteDocument = async (documentId) => {
    try {
        // Fetch document to get associated files
        const document = await prisma.documents.findUnique({
            where: { document_id: documentId },
            include: { files: true },
        });

        // Ensure document exists
        if (!document) {
            throw new Error(`Document with ID ${documentId} not found`);
        }

        // Await the resolution of document.files
        const files = await prisma.files.findMany({
            where: { document_id: documentId },
        });

        // Delete all files associated with the document
        for (const file of files) {
            await prisma.files.delete({
                where: { file_id: file.file_id },
            });
        }

        // Delete the document itself
        await prisma.documents.delete({
            where: { document_id: documentId },
        });

        console.log(`Document ${documentId} and associated files deleted`);
    } catch (error) {
        console.error("Error deleting document:", error);
        throw new Error(error);
    }
};


const deleteDocumentsAndFiles = async (field, id) => {
    try {
        // Fetch all documents based on the provided field and id
        const documents = await prisma.documents.findMany({
            where: { [field]: id },
            select: {
                document_id: true,
                files: {
                    select: { file_id: true }
                }
            }
        });

        // Delete all files associated with the fetched documents
        for (const document of documents) {
            await prisma.files.deleteMany({
                where: {
                    document_id: document.document_id
                }
            });
        }

        // Delete all documents associated with the provided field and id
        await prisma.documents.deleteMany({
            where: {
                [field]: id
            }
        });

        console.log(`All documents and files deleted for ${field}:`, id);
    } catch (error) {
        console.error(`Error deleting documents and files for ${field}:`, id, error);
    }
};

const deleteDocumentsAndFilesByDocumentId = async (documentType, documentId) => {
    try {
        // Fetch all documents based on the provided documentType and documentId
        const documents = await prisma.documents.findMany({
            where: {
                document_id: documentId,
                document_type: documentType
            },
            select: {
                document_id: true,
                files: {
                    select: { file_id: true }
                }
            }
        });

        // Delete all files associated with the fetched documents
        for (const document of documents) {
            await prisma.files.deleteMany({
                where: {
                    document_id: document.document_id
                }
            });
        }

        // Delete all documents based on the provided documentType and documentId
        await prisma.documents.deleteMany({
            where: {
                document_id: documentId,
                document_type: documentType
            }
        });

        console.log(`All documents and files deleted for documentType: ${documentType} and documentId: ${documentId}`);
    } catch (error) {
        console.error(`Error deleting documents and files for documentType: ${documentType} and documentId: ${documentId}`, error);
    }
};


async function getLastDocumentByTypeAndBusinessId(type, business_id) {
    return await prisma.documents.findFirst({
        where: {
            document_type: type,
            business_id: business_id
        },
        orderBy: {
            created_at: 'desc'
        }
    });
}

const updateDocumentByDocumentId = async (documentId, updateData) => {

    try {
        const document = await prisma.documents.findUnique({
            where: { document_id: documentId },
            include: { files: true },
        });

        if (!document) {
            throw new Error("Document not found");
        }

        return await prisma.documents.update({
            where: { document_id: documentId },
            data: updateData,
        });

    } catch (error) {
        console.error("Error updating document:", error);
        throw new Error(error);
    }
};


module.exports = {
    createDocument,
    getDocuments,
    getDocumentById,
    getDocumentsForUser,
    getDocumentsForBusiness,
    getDocumentsForDeliveryPerson,
    getDocumentsForDriver,
    getDocumentsForVehicle,
    getDocumentsByType,
    getDocumentsForUserByType,
    getDocumentsForBusinessByType,
    getDocumentsForDriverByType,
    getDocumentsForDeliveryPersonByType,
    getDocumentsForVehicleByType,
    updateDocumentFiles,
    updateDocumentExpirationDate,
    updateDocumentIssueDate,
    updateDocumentAdditionalInfo,
    linkDocumentToUser,
    linkDocumentToTransaction,
    linkDocumentToVehicle,
    linkDocumentToDriver,
    linkDocumentToDeliveryDriver,
    linkDocumentToBusiness,
    deleteDocument,
    linkDocumentToMenuItem,
    linkDocumentToLostItem,
    deleteDocumentsAndFiles,
    getLastDocumentByTypeAndBusinessId,
    deleteDocumentsAndFilesByDocumentId,
    updateDocumentByDocumentId,
    findDocumentByTypeAndDeliveryDriverId,
    findDocumentByTypeAndDriverId
};