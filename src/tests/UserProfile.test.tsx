import { describe, expect, it, vi, Mocked, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserProfile from "../components/UserProfile";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("UserProfile", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("отображает индикатор загрузки", () => {
    render(<UserProfile />);
    expect(screen.getByText(/Загрузка.../i)).toBeInTheDocument();
  });

  it("отображает данные пользователя после успешного запроса", async () => {
    mockedAxios.get.mockResolvedValue({
      data: { id: 1, name: "Иван Иванов", email: "ivan@example.com" },
    });

    render(<UserProfile />);

    await waitFor(() => expect(screen.getByText("Иван Иванов")).toBeInTheDocument());
    expect(screen.getByText(/Email: ivan@example.com/i)).toBeInTheDocument();
  });

  it("отображает сообщение об ошибке при сбое запроса", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Ошибка запроса"));

    render(<UserProfile />);
    await waitFor(() => expect(screen.getByText(/Ошибка загрузки данных/i)).toBeInTheDocument());
  });
});
