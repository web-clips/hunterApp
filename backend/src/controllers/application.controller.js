import prisma from "../lib/prisma.js";

export const getApplications = async (req, res) => {
  try {
    const applications = await prisma.application.findMany({
      where: {
        userId: req.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(applications);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Ошибка при отправке запросов",
    });
  }
};

export const createApplication = async (req, res) => {
  try {
    const {
      position,
      company,
      status,
      salaryFrom,
      salaryTo,
      currency,
      location,
      workFormat,
      appliedDate,
      source,
      postingUrl,
      notes,
    } = req.body;

    const companyInitials = company
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const createdApplication = await prisma.application.create({
      data: {
        position,
        company,
        companyInitials,
        status,
        salaryFrom,
        salaryTo,
        currency,
        location,
        workFormat,
        appliedDate: new Date(appliedDate),
        source,
        postingUrl,
        notes,
        userId: req.userId,
      },
    });

    return res.status(201).json({
      message: "Заявка успешно создана",
      createdApplication,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Ошибка при отправке запроса",
    });
  }
};
