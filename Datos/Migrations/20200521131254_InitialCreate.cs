using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Productos",
                columns: table => new
                {
                    CodigoP = table.Column<string>(nullable: false),
                    NombreP = table.Column<string>(nullable: true),
                    LaboratorioP = table.Column<string>(nullable: true),
                    Fechadevencimiento = table.Column<DateTime>(nullable: false),
                    CantidadP = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Productos", x => x.CodigoP);
                });

            migrationBuilder.CreateTable(
                name: "Ventas",
                columns: table => new
                {
                    ProductoId = table.Column<string>(nullable: false),
                    ProductoNombre = table.Column<string>(nullable: true),
                    CodigoV = table.Column<string>(nullable: true),
                    Fechadeventa = table.Column<DateTime>(nullable: false),
                    PrecioV = table.Column<int>(nullable: false),
                    CantidadV = table.Column<int>(nullable: false),
                    TotalV = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ventas", x => x.ProductoId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Productos");

            migrationBuilder.DropTable(
                name: "Ventas");
        }
    }
}
