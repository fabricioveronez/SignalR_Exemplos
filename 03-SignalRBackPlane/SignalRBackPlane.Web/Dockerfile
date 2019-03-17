FROM microsoft/dotnet:2.2-aspnetcore-runtime-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk-stretch AS build
WORKDIR /src
COPY ["SignalRBackPlane.Web/SignalRBackPlane.Web.csproj", "SignalRBackPlane.Web/"]
RUN dotnet restore "SignalRBackPlane.Web/SignalRBackPlane.Web.csproj"
COPY . .
WORKDIR "/src/SignalRBackPlane.Web"
RUN dotnet build "SignalRBackPlane.Web.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SignalRBackPlane.Web.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SignalRBackPlane.Web.dll"]
