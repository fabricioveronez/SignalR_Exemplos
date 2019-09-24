FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["SignalRAzureServices.Web/SignalRAzureServices.Web.csproj", "SignalRAzureServices.Web/"]
RUN dotnet restore "SignalRAzureServices.Web/SignalRAzureServices.Web.csproj"
COPY . .
WORKDIR "/src/SignalRAzureServices.Web"
RUN dotnet build "SignalRAzureServices.Web.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SignalRAzureServices.Web.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SignalRAzureServices.Web.dll"]